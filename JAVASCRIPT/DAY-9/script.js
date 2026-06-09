// const student = {
//     fullName: "dishita mundra",
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks= ",this.marks);
//     },
// };


const employee = {
    calcTax1() {
        console.log("tax rate is 10%");
    },
    // calcTax2 : function () {
    //     console.log("tax rate is 10%");
    // },
};

console.log(employee.calcTax1());

const newEmpl1 = {
    salary: 50000,
};

const newEmpl2 = {
    salary: 50000,
};

const newEmpl3 = {
    salary: 50000,
};

const newEmpl4 = {
    salary: 50000,
};

newEmpl1.__proto__ = employee;
newEmpl2.__proto__ = employee;
newEmpl3.__proto__ = employee;
newEmpl4.__proto__ = employee;