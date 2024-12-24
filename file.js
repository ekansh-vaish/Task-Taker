const  inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container")

function clickitem() {
if(inputbox.value == '' )
{
alert("please enter some task");
}
else{


const list = document.createElement("li");
list.innerHTML = inputbox.value;

listcontainer.appendChild(list);
let span = document.createElement("span");
span.innerHTML = "\u00d7";
list.appendChild(span);
}
inputbox.value = "";
savedata();
}

listcontainer.addEventListener("click",function (event) {
if(event.target.tagName === "LIST")
{
event.target.toggle("checked");
savedata();
}    
else if(event.target.tagName === "SPAN")
{
event.target.parentElement.remove();
savedata();

}

},false);

function savedata() {
localStorage.setItem("data",listcontainer.innerHTML);  
}

function showdata() {
listcontainer.innerHTML = localStorage.getItem("data");    
}
showdata();
