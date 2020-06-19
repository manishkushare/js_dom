
let newElem = document.body;
let newP = document.createElement("p");
newP.textContent = 'Hello Javascript!';
newP.innerHTML = "I love <strong>Javascript</strong>"
newElem.append(newP);

let ulList = document.createElement("ul");
ulList.className = 'ullist';

let ullist = document.querySelector(".ullist");
ulList.innerHTML= "<li>Buy groceries</li><li>Feed the cat</li><li>Do laundry</li>";
document.body.append(ulList);

let newList = document.createElement("li");
newList.textContent= "make food"
ulList.appendChild(newList);

ulList.removeChild(newList);

// ulList.firstElementChild.remove() // will remove buy grocerries

// ulList.lastElementChild.remove()// will remove last element child

// ulList.firstChild.remove() // willremove buy groceeries

ulList.firstChild.nextSibling.nextSibling.remove() // will remove 3rd child element


