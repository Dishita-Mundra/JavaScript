// PROTOTYPE

// const student = {
//     fullName: "dishita mundra",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks= ",this.marks);
//     },
// };


// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
//     // calcTax2 : function () {
//     //     console.log("tax rate is 10%");
//     // },
// };

// console.log(employee.calcTax());

// const newEmpl1 = {
//     salary: 50000,
//     clacTax() {
//         console.log("tax rate is 20%");
//     }
// };


// newEmpl1.__proto__ = employee;




// CLASSES

// class ToyotaCar {
//     constructor(){
//         console.log("creating new object");
//     }

//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("stop");
//     }

//     setBrand(brand) {
//         this.brandName = brand;
//     }
// }

// let fortuner = new ToyotaCar();
// fortuner.setBrand("fortuner");




// INHERITANCE

// class Parent {
//     hello () {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

// console.log(obj.hello());
// console.log(obj.hi());   // error because this function does not exist 


// class Person {
//     constructor() {
//         this.species = "homo sapiens"
//     }

//     eat() {
//         console.log("eat"); 
//     }

//     sleep() {
//         console.log("sleep"); 
//     }

//     work() {
//         console.log("do nothing");   
//     }
// }

// let dishObj = new Person();

// class Engineer extends Person{
//     work() {
//         console.log("solve problems, build something");
//     }
// }

// let dishObj1 = new Engineer();

// class Doctor extends Person{
//     work() {
//         console.log("treat patients");
//     }
// }

// let dishObj2 = new Doctor();




// class Person {
//     constructor() {
//         console.log("enter parent constructor");
//         this.species = "homo sapiens"
//     }

//     eat() {
//         console.log("eat"); 
//     }
// }

// class Engineer extends Person{
//     constructor(branch) {
//         console.log("enter child constructor");
//         super();   // to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }

//     work() {
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("chemical engg");

// console.log(engObj);



// class Person {
//     constructor(name) {
//         this.species = "homo sapiens"
//         this.name = name;
//     }

//     eat() {
//         console.log("eat"); 
//     }
// }

// class Engineer extends Person{
//     constructor(name) {
//         super(name);   // to invoke parent class constructor
//     }

//     work() {
//         super.eat();
//         console.log("solve problems, build something");
//     }
// }

// let engObj = new Engineer("dishita");

// console.log(engObj);
// console.log(engObj.work());




// PRACTICE

// let DATA = "secret information";

// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("website data= ", DATA);
//     }
// }

// console.log(student1);
// console.log(student2);

// class Admin extends User() {
//     constructor(name, email) {
//         super(name, email);
//     }
//     editData() {
//         DATA = "some new value";
//     }
// }

// let student1 = new User("dishita", "abc@gmail.com");
// let student2 = new User("swati", "xyz@email.com");

// let teacher1 = new User("dean","dean@college.com")

// let admin1 = new Admin("admin", "admin@college.com");




// ERROR HANDLING

// let a = 5;
// let b = 10;

// console.log("a= ", a);
// console.log("b= ", b);
// console.log("a + b ", a + b);

// try{
//     console.log("a + b ", a + c);
// } catch(err) {
//     console.log(err);
// }

// console.log("a + b ", a + b);
// console.log("a + b ", a + b);
// console.log("a + b ", a + b);
// console.log("a + b ", a + b);
// console.log("a + b ", a + b);