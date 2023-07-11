/* export function createele(ele,eleyouwillcreate,textofelement,attryoucreate,valofattr){
    let main = document.createElement(eleyouwillcreate);
    let maintext = document.createTextNode(textofelement);
    main.appendChild(maintext);
    let attr = document.createAttribute(attryoucreate);
    attr.value = valofattr;
    main.setAttributeNode(attr);
    ele.appendChild(main)
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////s

/*
algorithm


function that takes data from input

-split string into array


*/
/* manual of are you 18
you put the function inside a change of input event you pass two parameters (the input value,the current date using Date bulit in function)
-and but it inside of var meaning the function and if it return true meaning he is 18 or bigger if return false meaning he is less than 18

let date = document.querySelector("input");
date.onchange = function () {
    let date2 = new Date();
   let bool = areyou18(this.value.toString(),date2);
   console.log(bool)
}
function areyou18(date,date2){
  let arr = date.split("-");
 
  let arr2 = [date2.getFullYear(),date2.getMonth() + 1,date2.getDate()];
  let arr3=[];
  let result = 0;
for(let i = 0; i < arr.length; i++){
    result = 0;
    result = parseInt(arr2[i]) - parseInt(arr[i]);
    arr3[i] = result; 
}
console.log(arr3)
let bool = true;
if(arr3[0] == 18){
    if(arr3[1] < 0 ){
        bool = false
        return bool;
    }else if(arr3[1] == 0 && arr3[2] < 0){
        bool = false;
        return bool;
    }
    else{
        bool = true;
        return bool
    }

}else if(arr3[0] > 18){
    return bool;
}else if(arr3[0] < 18){
    bool = false;
    return bool
}
}
*/
/////////////////function to check if there is any special chars////////////////
function specialcharacter(char){
    var iChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    if(iChars.indexOf(char) > -1){
        return true;
    }else{
        return false;
    }

}
