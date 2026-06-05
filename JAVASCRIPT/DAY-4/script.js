// ARRAYS

// let marks = [97, 82, 75, 64, 36];

// console.log(marks);
// console.log(marks.length);   //property
// console.log(typeof(marks));


// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

// console.log(heroes);
// console.log(typeof(heroes));
// console.log(heroes.length);


// let marks = [97, 82, 75, 64, 36];

// console.log(marks[0]);
// console.log(marks[5]);

// marks[2]=76;

// console.log(marks);


// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];

//for loop
// for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[idx])
// }

//for-of loop
// for(let hero of heroes){
//     console.log(hero);
// }


// let cities = ["delhi", "pune", "mumbai", "hyderabad", "gurgaon"];

// for (let city of cities) {
//     console.log(city);
// }

// for (let city of cities) {
//     console.log(city.toUpperCase());
// }



// PRACTICE

// Q1           
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length

// console.log(`avg marks of the class is ${avg}`);


// Q2
// let items = [250, 645, 300, 900, 50];

// let i = 0;

// for (let val of items) {

//     let offer = val / 10;
//     items[i] = items[i] - offer;

//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;

//     items[i] -= offer;
// }

// console.log(items);


// ARRAY METHODS

// let foodItems = ["potato", "apple", "litchi", "tomato"];

// let marks = [97, 86, 54, 36];

// foodItems.push("chips", "burger", "panner");

// console.log(foodItems.pop());

// console.log(foodItems);

// console.log(foodItems);
// console.log(foodItems.toString());

// console.log(marks);
// console.log(marks.toString()); 


// let marvelHeroes = ["thor", "spiderman", "ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes=["shaktiman","krish"];

// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes);

// console.log(heroes);

// marvelHeroes.unshift("antman");
// console.log(marvelHeroes);

// let val = marvelHeroes.shift()
// console.log("deleted",val);

// console.log(marvelHeroes);


// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];

// console.log(marvelHeroes);

// console.log(marvelHeroes.slice(1,3));


// let arr = [1, 2, 3, 4, 5, 6, 7];

// arr.splice(2, 2, 8, 9);

//Add Element
// arr.splice(7, 0, 8);

//Delete Element
// arr.splice(6, 1);

//Replace Element
// arr.splice(3, 1, 8);

// console.log(arr);