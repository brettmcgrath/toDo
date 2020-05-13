/* fix list: 
    be able to click on text to check checkbox
    make checkbox fixed based off of left side of card 
    make input text area stickied to bottom of page 
    attempt to change list name in index.html to fix weird adding task issue when 
    expanding to multiple days
    *
*/

var input = document.getElementById("input");
var list = document.getElementById("list");
var tasks = document.getElementById("tasks");

function addTask() {
    if (tasks.value !== '') {
        var box = document.createElement("input");
        box.type = "checkbox";
        box.className = "form-check-input";
        box.name = "boxName";
        var node = document.createElement("li"); //create <li>
        var text = document.getElementById("tasks").value; //get the value of the input 
        var textnode = document.createTextNode(text); //create a text node
        node.appendChild(box); //combine checkbox onto li
        node.appendChild(textnode); //combine html tag and text
        list.appendChild(node); //put it in the html
        console.log("submitted");
        tasks.value = '';
    } else {
        alert("You must enter a task before adding it")
    }
}

document.getElementById("btn").addEventListener("click", addTask);

input = addEventListener("keyup", function(event){
    if (tasks.value !== '') {
        if (event.keyCode === 13) {
            addTask()
        }
    } else {
        alert("You must enter a task before adding it")
    }
});