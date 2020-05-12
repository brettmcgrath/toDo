/* fix list: 
    be able to click on text to check checkbox
    make checkbox fixed based off of left side of card 
    make input text area stickied to bottom of page 
    break out the function in input 
    reset textbox after submission

    attempt to change list name in index.html to fix weird adding task issue when 
    expanding to multiple days
    *
*/
var input = document.getElementById("input");
var list = document.getElementById("list");
var tasks = document.getElementById("tasks");

function addTask(){
    var box = document.createElement("input");
    box.type = "checkbox";
    box.className = "form-check-input";
    box.name = "boxName";
    //create <li>
    var node = document.createElement("li");
    //get the value of the input 
    var text = document.getElementById("tasks").value;
    //create a text node
    var textnode = document.createTextNode(text);
    //combine checkbox onto li
    node.appendChild(box); 
    //combine html tag and text
    node.appendChild(textnode);
    //put it in the html
    list.appendChild(node);
    console.log("submitted");
}

document.getElementById("btn").addEventListener("click", addTask);

input = addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        var box = document.createElement("input");
            box.type = "checkbox";
            box.className = "form-check-input";
            box.name = "boxName";

        //create <li>
        var node = document.createElement("li");
        //get the value of the input 
        var text = document.getElementById("tasks").value;
        //create a text node
        var textnode = document.createTextNode(text);
        //combine checkbox onto li
        node.appendChild(box); 
        //combine html tag and text
        node.appendChild(textnode);
        //put it in the html
        list.appendChild(node);
        console.log("submitted");
    }
});
