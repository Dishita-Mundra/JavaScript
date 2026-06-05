// LOOPS


// 1.for loop

// for (let i = 1; i <= 5; i++) {
//     console.log("dishita");
// }


// Calculate sum of first n numbers
// let sum = 0;
// n = prompt("Enter a number")
// for (let i = 0; i <= n; i++) {
//     sum += i;
// }
// console.log("sum of ",n," is ", sum);


// for (let i = 1; i <= 5; i++) {
//  console.log("i = ", i)
// }



// 2.while loop

// let i = 1;
// while (i <= 5) {
//     console.log("dishita");
//     i++
// }



// 3.do-while loop

// let i = 1;
// do {
//     console.log("dishita");
//     i++;
// } while (i <= 5);



// 4.for-of loop

// let str = "Dishita";

// let size = 0;
// for (let i of str) {
//     console.log("i=", i);
//     size++;
// }

// console.log("string size =", size);



// 5.for-in loop

// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for (let key in student) {
//     console.log("key=", key, "value=", student[key]);
// }



// PRACTICE

// Q1

// for (let num = 0; num <= 100; num++) {
//     if (num % 2 === 0) {
//         console.log("num=", num);
//     }
// }


// Q2

// let gameNum = 146;

// let userNum = prompt("Guess the game number");

// while (userNum != gameNum) {
//     userNum = prompt("You entered wrong number. Guess again");
// }

// console.log("Congratulations, you entered the right number");





// STRINGS

// let str = "Dishita";
// let str2 = "Mundra";

// console.log(str);
// console.log(str2);

// console.log(str.length);
// console.log(str2.length);

// console.log(str[0]);
// console.log(str2[5]);




// TEMPLATE LITERALS

// let specialString = `This is a template literal`;

// console.log(specialString);
// console.log(typeof (specialString));

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output=`The cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of", obj.item, "is", obj.price, "rupees");


// let specialString = `This is a template literal ${1+2+3}`;

// console.log(specialString);



// ESCAPE CHARACTERS

// console.log("Dishita\nMundra");
// console.log("Dishita\tMundra");



// STRING METHODS

// let str = "Dishita Mundra";
// let str1 = "        Dishita Mundra         ";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// console.log(str1);
// console.log(str1.trim());

// let str = "0123456789";
// let str1 = "345";

// console.log(str.slice(2, 9));

// console.log(str1.concat(str));

// console.log(str.replace("5", "3"));

// console.log(str.charAt(5));




// PRACTICE

// let fullName = prompt("Enter your full name without spaces");

// let username = "@" + fullName + fullName.length;

// console.log(username);