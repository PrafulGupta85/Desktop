// This object is created using Object Literal
let person = {
  fName: "Praful",
  lName: "Gupta",

  //method
  getFunction: function () {
    return `This is Object person and First Name ${this.fName} and Last Name ${this.lName}`;
  },

  // object in object
  phoneNo: {
    number: 9989,
    type: "Landline",
    area: "UP",
  },
};

// console.log(person.getFunction());
// console.log(person.phoneNo.area, person.phoneNo.number);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Vehicle {
  constructor(name, company, engine) {
    (this.name = name), (this.company = company), (this.engine = engine);
  }

  getDetails() {
    return `The brand ${this.company}, has car ${this.name} and engine ${this.engine}`;
  }
}

let audiQ8 = new Vehicle("Q8", "Audi", 3000);
let bmwx1 = new Vehicle("x1", "Bmw", 2800);

console.log(bmwx1.getDetails());
console.log(audiQ8.getDetails());
