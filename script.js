console.log("DOM");
// select on the document (id, class, tag);
// QuerySelector (css selectors)
//querySelectorAll
 const heading = document.querySelector("h1");
 console.log(heading);

 const headings = document.querySelectorAll("h1");
 console.log(heading);

 const para1 = document.querySelector("text");
 console.log(para1);

 const para2 = document.querySelector("#text");
 console.log(para2);

 paras.forEach(element => {
    paras
 });
  = document.querySelector("h1");
 console.log(heading);


//getElementById
const paragraph = document.getElementById("text2");
 console.log(paragraph);

 const paragraph2 = document.getElementById("text");
 console.log(paragraph2);

 const body = document.getElementsByTagName("body");
 console.log(body);


//changing content on the document textContent
const heading3 = document.querySelector("h1");
heading3.textContent = "changed content";
heading3.textContent += " is Fun";

constpara = document.querySelector("text");
para1.textContent += " changed the content from js";


const box = document.querySelector(".box");
box.innerHTML +=  `<h2> I AM A TAG FROM JS</h2>`;


// get and setting attribute
const link = document.querySelector("a");
const href = link.getAttribute("href");
console.log(href);
link.setAttribute("target", "_blank");
link.setAttribute("style", "font-size: 2em");
link.setAttribute("target", "_blank");


//styling
//style
link.style.backgroundColor = "red";
link.style.fontSize = "2em"; 

 // class Names --- classList (add, remove)
 const box1 = document.querySelector(".box-1");
 const box2 = document.querySelector(".box-2");

 // box1. classList.add ("success");
box1.className = "success";
box2.classList.add("error");

// const heading = document.querySelector("h1");
//heading.classList.remove("success");

// classList.add --> adds a new class name to the previous classes
// className --> overrides the previous classes
// div.classList.add = "Tobi"


//create a new element --> createElement
const heading2 = document.createElement("h1");
heading2.textContent = "I am a newly created element";
heading2.style.backgroundColor = "blue";

const body2 = document.querySelector("body");
body2.appendChild(heading2)

// removeChild


// Responding to users interaction

// Event handling --> click event, form is submitted, input

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    console.log("USER CLICKED");
    body.style.backgroundColor = "red";
});

