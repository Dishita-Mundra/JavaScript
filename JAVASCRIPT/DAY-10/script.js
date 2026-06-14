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


// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < 5; j++) {
//         str = str + j;
//     }
//     console.log(str);
// } 




// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 1000);
// }

// console.log(getData(1));


// function getData(dataId, getNextData) {
    // setTimeout(() => {
    //     console.log("data", dataId);
    //     if (getNextData){
    //         getNextData();
    //     }
    // }, 2000);
// }

// // callback hell
// getData(1, () => {
//     console.log("getting data2 ....");
//     getData(2, () => {
//         console.log("getting data3 ....");
//         getData(3, () => {
//             console.log("getting data4 ....");
//             getData(4);
//         });
//     });
// });




// PROMISES

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     // resolve(123);
//     reject("some error occured");
// });

function getData(dataId, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
    })
}