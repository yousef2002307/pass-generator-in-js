export function createele(ele,eleyouwillcreate,textofelement,attryoucreate,valofattr){
    let main = document.createElement(eleyouwillcreate);
    let maintext = document.createTextNode(textofelement);
    main.appendChild(maintext);
    let attr = document.createAttribute(attryoucreate);
    attr.value = valofattr;
    main.setAttributeNode(attr);
    ele.appendChild(main)
}