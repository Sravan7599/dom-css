// Adding css using dom
// 1.Individual property
// 2.css text
// 3.adding classnames


// 1.Individual property (applying styles individually)
let heading = document.getElementById("access");
console.log(heading);
heading.style.backgroundColor = "blue";
heading.style.color = "white";
heading.style.fontSize = "3rem";


// 2.css text
let heading1 = document.getElementById("access");
console.log(heading1);
heading1.style.cssText = "background-color: blue; color:white;"


// 3.adding classnames
let heading2 = document.getElementById("access");
console.log(heading2);
heading2.classList.add("box");


// add and remove colors to some text when button is clicked
function onAddClick(){
    let heading = document.getElementById("access");
    heading.classList.add("box");
    console.log("add clicked");

}

function onRemoveClick(){
    let heading = document.getElementById("access");
    heading.classList.remove("box");
    console.log("remove clicked");
}


// 1.innerText
// 2.textContent
// 3.innerHTML

// 1.innerText
let paragraph = document.getElementById("access101");
console.log(paragraph.innerText);
paragraph.innerText = "hello   <b> world </b>"

// 2.textContent
let paragraph = document.getElementById("access101");
console.log(paragraph.textContent);
paragraph.innerText = "hello   <b> world </b>"

//3.innerHTML
let paragraph = document.getElementById("access101");
console.log(paragraph.innerHTML);
paragraph.innerHTML = "hello   <b> world </b>"