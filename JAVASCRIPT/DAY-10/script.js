// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");



// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

// OR

// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });



// const hello = () => {
//     console.log("hello");
// }

// setTimeout(hello, 3000);



// nesting

// let age = 19;
// if (age >= 18) {
//     if (age >=60) {
//         console.log("senior");        
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }


for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(str);
}