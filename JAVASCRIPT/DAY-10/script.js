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

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         // console.log("data", dataId);
//         // resolve("success");
//         reject("error");
//         if (getNextData){
//             getNextData();
//         }
//     }, 5000);
//     })
// }

// let promise = getData(123);


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("123"); 
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });



// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//     console.log("fetching data2....");
//     asyncFunc2().then((res) => {});
// });

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });



// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     })
// }

// PROMISE CHAIN

// console.log("getting data1 ....");
// getData(1)
//    .then((res) => {
//       console.log("getting data2 ....");
//       return getData(2);
//    })
//    .then((res) => {
//       console.log("getting data3 ....");
//       return getData(3);
//    })
//    .then((res) => {
//       console.log(res);
//    });


