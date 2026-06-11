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


class Person {
    eat() {
        console.log("eat"); 
    }

    sleep() {
        console.log("sleep"); 
    }

    work() {
        console.log("do nothing");   
    }
}

class Engineer extends Person{
    work() {
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work() {
        console.log("treat patients");
    }
}

let dishObj = new Engineer();