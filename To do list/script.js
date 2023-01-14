
function newElement(){
    let li =document.createElement("li");
    let inputValue=document.getElementById("myInput").value ;
    let t = document.createTextNode(inputValue);
    let button =document.createElement("button");
    let txt=document.createTextNode("delete")
    button.appendChild(txt);

    li.appendChild(t);
    li.appendChild(button);
    if(inputValue == ""){
        alert("You must write something")
    }
    else
    {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    
     
}