let clickbackground = document.body;
function backgroundColor() {
    clickbackground.style.background= "red";
    console.log("done");
    
}
clickbackground.addEventListener('click', backgroundColor);


//////////////////////////////////////////////////////////////////////

let getColor = function () {
    let color = "#";
    let values = "ABCDEF0123456789".split("");
    
       for (let i = 0; i<6; i++) {
 
          let randomNum = Math.floor(Math.random() * 16);;
          color = color + values[randomNum];
          
       }
    return color;
 }
 
 
 document.addEventListener("click", () => {
    document.body.style.backgroundColor = getColor();
 });

