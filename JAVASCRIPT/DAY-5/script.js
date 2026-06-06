// function myFunction() {
//     console.log("We are learning JS");
//     console.log("welcome to JS");
// }

// myFunction();


// function myFunction(msg, n) {
//     // parameter -> input
//     console.log(msg, n);
// }

// myFunction("Welcome to JS", 100);  // argument


// Function used to calculate sum of 2 numbers

// function sum(n1, n2){
//     console.log(n1 + n2);
// }

// sum(2, 6);


// function sum(x, y) {
//     // x, y are local variables
//     s = x + y;
//     console.log("before return");
//     return s;
//     // console.log("after return");    // after return no statement will execute
// }

// let val = sum(134, 6);
// console.log(val);


// Sum Function
// function sum(a, b) {
//     return a + b;
// }

// Moderna JS
// const arrowSum = (a, b) => {
//     console.log(a + b);
// };

// console.log(arrowSum(2,8));


// Multiplication Function
// const multiply = (a, b) => {
//     console.log(a * b);
// };

// console.log(multiply(2, 7));


// const multiply = (a, b) => {
//     return a * b;
// };

// console.log(multiply(2, 7));


// const printHello = () => console.log("hello");
// console.log(printHello());




//PRACTICE

// Q. Count number of vowels in a string

// First Normal Method

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("dishita"));



// Second Arrow Function

// const countVow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVow("dishita"));



// forEach Loop in Arrays

// let arr = ["pune", "delhi", "mumbai"];

// arr.forEach(function printVal(val){  // value at each index
//     console.log(val);
// });

// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);
// });




// PRACTICE

// 1st Method

// let arr = [1, 2, 3, 4, 5];

// let calcSquare = (val) => {
//     console.log(val ** 2);
// }

// arr.forEach(calcSquare);


// 2nd Method

// arr.forEach((val) => {
//     console.log(val ** 2);
// });


// let nums = [67, 52, 39];

// nums.map((val) => {
//     console.log(val);
// });

// let newArr = nums.map((val) => {
//     return val ** 2;
// });

// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7,];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// let oddArr = arr.filter((val) => {
//     return val % 2 !== 0;
// })

// console.log(`even array is ${evenArr}`);
// console.log(`odd  array is ${oddArr}`);
