function addTask(){
    var input=document.getElementById('input');
    if(input.value!=""){
    var unList=document.getElementById('unlist');
    var listElement=document.createElement('li');
    var listText=document.createTextNode(input.value);
    listElement.appendChild(listText);
    unList.appendChild(listElement);
    var editElement=document.createElement("button");
    var editText=document.createTextNode('EDIT');
    editElement.setAttribute("class",'btn');
    editElement.setAttribute('onclick','editList(this)');
    editElement.appendChild(editText);
    var deleteElement=document.createElement("button");
    var deleteText=document.createTextNode("DELETE");
    deleteElement.setAttribute("class",'btn');
    deleteElement.setAttribute("onclick","deleteList(this)");
    deleteElement.appendChild(deleteText);
    unList.appendChild(editElement);
    unList.appendChild(deleteElement);
    input.value="";
    }
    else{
        alert("Please Enter Task..");
    }
}
function editList(edi){
    var edited=edi.parentNode.nodeValue;
    var editValue=prompt("Enter New Value");
    if(editValue==""){
        alert("Please Enter New Value");
    }
    else{
        edi.parentNode.firstChild.nodeValue.innerHTML="";
        edi.parentNode.firstChild.nodeValue=editValue;
    }
}
function deleteList(del){
    alert("This Item will be deleted permanently.Are You Sure");
    del.parentNode.remove();
}

function deleteAll(){
    var unList=document.getElementById("unlist");
    unList.innerHTML="";
}
