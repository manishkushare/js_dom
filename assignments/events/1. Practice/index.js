//Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

//Select the section with an id of container using querySelector.
let container1 = document.querySelector("#container");

//Select all of the list items with a class of "second".
let second = document.getElementsByClassName("second");
document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
let orderlist = document.querySelector("ol");
orderlist.getElementsByClassName("third");



//Give the section with an id of container the text "Hello!".
// container.innerText= "Hello!"


//Add the class main to the div with a class of footer.

let footer= document.querySelector(".footer");
footer.classList.add("main")

//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
let newli= document.createElement("li");


//Give the li the text "four".
newli.innerText= "four";


//Append the li to the ul element.
document.querySelector("ul").append(newli);


//Loop over all of the list inside the ol tag and give them a background color of "green".
document.querySelectorAll("ol").forEach(elem => elem.style.backgroundColor= "green");


//Remove the div with a class of footer.
document.querySelector(".footer").remove();
