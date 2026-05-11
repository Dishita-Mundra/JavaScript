// console.log("Hello World");
// console.log("This is a JavaScript file.");
// name = "Dishita";
// age=20;
// price=99.99;
// x = null;
// y = undefined;
// console.log(name);
// console.log(age);
// console.log(price);
// console.log(x);
// console.log(y);

// isFollow = false;
// console.log(isFollow);
// isFollow = true;
// console.log(isFollow);

// var age=24
// var age=30
// console.log(age); // no error variable can be re declared and updated using var

// let a; // console.log(a); // undefined
// let name="Dishita"
// let name="Dishita" // error variable cannot be re declared using let
// name="Mundra" // variable can be updated using let
// console.log(name);

//const a; // error missing initializer in const declaration
// const age=25;
// age=30 // error variable cannot be updated using const
// const age=30 // error variable cannot be re declared using const
// console.log(age);

// let a=10;
// let b=100.5;  # typeof a and b is number
// let name="Dishita"; # typeof name is string
// let isFollow=false; # typeof isFollow is boolean
// let x; # typeof x is undefined
// let y=null; # typeof y is object (this is a quirk in JavaScript, null is considered an object)
// let x= BigInt("123") // typeof x is bigint
// let y = Symbol("Hello") // typeof y is symbol

// const student = {
//     name : "Dishita Mundra", 
//     age : 20,
//     cgpa : 8,
//     isPass:true
// };
// console.log(student.name);
// console.log(student.age);
// console.log(student["cgpa"]);
// console.log(student["isPass"]);

// student.age = student.age + 1; // updating age
// student["cgpa"] = student["cgpa"] + 0.5;
// student.name = "Dishita"; // updating name
// student.sem = 3; // adding new property sem

// console.log(student.age);
// console.log(student["cgpa"]);
// console.log(student.name);
// console.log(student.sem);

// PRACTICE QUESTIONS

//1.

// const product ={
//     title : "Ball Pen",
//     rating : 4,
//     offer: 5,
//     price : 270,
// }
// console.log(product);

// console.log("123" + 4); // string concatenation, output: "1234"
// console.log("123" - 4); // numeric subtraction, output: 119
// console.log("123" * 4); // numeric multiplication, output: 492
// console.log("123" / 4); // numeric division, output: 30.75

//2.

const profile = {
    name : "shradhakhapra",
    posts : 195,
    followers : "569K",
    following : 4,
    bio : "Apna College",
    isFollowing : false
}
console.log(profile); 