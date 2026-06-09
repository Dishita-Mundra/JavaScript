// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);


// let para = document.querySelector("p");

// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class","paragraph"));


// let div = document.querySelector("div");
// console.log(div);
// console.log(div.style);

// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// div.style.fontSize = "20px";

// div.innerText = "Hello";



// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";
// console.log(newBtn);

// let div = document.querySelector("div");

// div.append(newBtn);

// div.prepend(newBtn);

// div.before(newBtn);

// div.after(newBtn);


// let p = document.querySelector("p");
// p.after(newBtn);


// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>New Heading</i>";
// console.log(newHeading);

// let body = document.querySelector("body");

// body.prepend(newHeading);

// let para = document.querySelector("p");
// para.remove();





// PRACTICE


// 1.

// let button = document.createElement("button");
// button.innerHTML = "Click Me!";

// button.style.backgroundColor = "red";
// button.style.color = "white";

// let body = document.querySelector("body");
// body.prepend(button);


// 2.

let para = document.querySelector(".para");
console.log(para);

// para.setAttribute("class", "newClass");    // not a good method to add new class because this completely vanish the existing class

para.classList.add("newClass");

// para.classList.remove("newClass");