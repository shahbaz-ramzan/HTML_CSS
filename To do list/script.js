let myNodelist=document.getElementsByTagName("LI");
for(let i =0;i<myNodelist.length;i++){
    let span =document.createElement("span");
    let txt = document.createTextNode("");
    span.className="close";
    span.appendChild(txt);
    myNodelist[i].appendChildO(span);
}
