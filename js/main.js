////////////////////////the stash//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let generatorbtn = document.querySelector(".generator__btn");
let symbols = '?-{()é:÷`?%%_*]+=&.é:.}'.split("");
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabet2 = [...Array(26)].map((_, i) => String.fromCharCode(i + 97))
const nums = [0,1,2,3,4,5,6,7,8,9];
let numinput = document.querySelector(".pw");
let checksinput = Array.from(document.querySelectorAll(".form-group input"));
let bools = [false,false,false,false];
let tv = document.querySelector(".generator__password h3");
let messagebox = document.querySelector(".Toastify");
let clipboard = document.querySelector(".fa-clipboard");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
generatorbtn.onclick = function(){
   tv.textContent = '';
   let length = parseInt(numinput.value);
   R.compose(showMessage,showText,randomizetext,produceOutput,middleware,checkInputs)(length)
}
function checkInputs(length){
let checkInputs2 = [...checksinput];
let bools2 = [...bools]
checkInputs2.forEach((ele,index) => {
if(index !== 0){
   if(ele.checked){
      bools2[index - 1] = ele.checked;
   }
}
});
let bools2length = bools2.filter(ele => ele === true).length;
return [bools2,bools2length,length];
}
//////////////////////////////////////////////////////////////////////////////////////////////
function middleware([bools2,bools2length,length]){
  let bools3 = [...bools2];
 
  //here we do to show the error message if there no box is checked
  if(bools2length === 0) return false
  return [Math.ceil(length / bools2length),bools3,length];
}
function produceOutput(arr){
   if(arr === false) return false;
  let [percentage,bools3,length] = arr;
let bools4 = [...bools3];
let mainstr = '';
let rand = 0;
for(let i =0; i < bools4.length; i++){
   if(!bools4[i]) continue;
   switch (i) {
      case 0:
         rand = Math.floor(Math.random() * (alphabet.length - 1)/2);
         mainstr += alphabet.slice(rand,rand + percentage).join("")
         break;
    case 1:
       rand = Math.floor(Math.random() * (alphabet2.length - 1) / 2);
      mainstr += alphabet2.slice(rand,rand + percentage).join("")
    break;
    case 2:
      rand = Math.floor(Math.random() * (nums.length - 1)/2);
      mainstr += nums.slice(rand,rand + percentage).join("")
         break;
    case 3:
      rand = Math.floor(Math.random() * (symbols.length - 1)/2);
      mainstr += symbols.slice(rand,rand + percentage).join("")
    break;
      default:
         break;
   }
}
if(mainstr.length > length){
   mainstr = mainstr.slice(0,length );
}
if(mainstr.length < length){
   while(mainstr.length < length){
      mainstr+= mainstr.slice(0,(length - mainstr.length))
   }
}
return mainstr;
}
//////////////////////////////////////////////////////////////////////////////////////
function randomizetext(mainstr){
   if(mainstr === false) return false;
let rand = 0;
let arr = mainstr.split("");
for (let index = 0; index < arr.length; index++) {
   rand = Math.abs( Math.floor(Math.random() * arr.length - 2));
   [arr[index],arr[rand]] = [arr[rand],arr[index]];
  
}
return arr.join("")
}
function showText(str){
   if(str === false) return false;
   tv.textContent = str;
   console.log(str.length)
   return true;
}
//we make a globar error str that based on it we see what the cause of error and show a message
function showMessage(bool){
   if(bool){
      messagebox.textContent = "text has been generated successfully";
      return bool;
   }
   messagebox.textContent = "you have to check one of the boxes";
   return bool;
}
////////////////////////////////////////////////////////////////////////////
clipboard.onclick = function(){

   if(tv.textContent.trim() === ''){
      messagebox.textContent = "no text to copy";
   }else{
      navigator.clipboard.writeText(tv.textContent)
      messagebox.textContent = "text has been copied";
   }
}
