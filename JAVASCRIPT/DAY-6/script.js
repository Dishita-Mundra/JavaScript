// 1.

// if we want any change dynamically on basis of user input we can write this type of code in console window in browser(DOM)
// document.body.childNodes[3].innerText = "abcd";

// let header = document.getElementById("heading1");

// console.log(header);
// console.dir(header);

// let button = document.getElementById("myId");
// console.dir(button);


// let headings = document.getElementsByClassName("myClass");
// console.log(headings);
// console.dir(headings);


// let para = document.getElementsByTagName("p");
// console.dir(para);


// let firstEl = document.querySelector("p");  //1st element
// console.dir(firstEl);


// let allEl = document.querySelectorAll("p");   // all elements
// console.dir(allEl);


// let firstEl = document.querySelector(".myClass");  //1st element
// console.dir(firstEl);


// let allEl = document.querySelectorAll(".myClass");   // all elements
// console.dir(allEl);


// let firstEl = document.querySelector("#myId");  //1st element
// console.dir(firstEl);


// let allEl = document.querySelectorAll("#myId");   // all elements
// console.dir(allEl);

// console.dir(document.body.firstChild);

// 2.

let div = document.querySelector("div");
console.dir(div);

console.log(div.innerText);

console.log(div.innerHTML);