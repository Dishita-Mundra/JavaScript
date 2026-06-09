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

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand()