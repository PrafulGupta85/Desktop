// This object is created using Object Literal
let demo = {
  fName: "Praful",
  lName: "Gupta",

  //method
  getFunction: function () {
    return `This is Object demo and First Name ${this.fName} and Last Name ${this.lName}`;
  },

  // object in object
  phoneNo: {
    number: 9989,
    type: "Landline",
    area: "UP",
  },
};
// console.log(demo.getFunction());
// console.log(demo.phoneNo.area, demo.phoneNo.number);

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

// console.log(bmwx1.getDetails());
// console.log(audiQ8.getDetails());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// This is similar to above example but here we are using OOPS properties
// Here we use encapsulation to wrap properties and fun.
class PersonOne {
  constructor(name, id, mail) {
    (this.name = name), (this.id = id), (this.mail = mail);
  }

  setAddress(add) {
    this.add = add;
  }

  getOutput() {
    return `Person Name: ${this.name}, id: ${this.id}, mail: ${this.mail} and address: ${this.add}`;
  }
}

let Ajay = new PersonOne("Ajay", 1, "ajay@su.com");
Ajay.setAddress("Palampur, India");
// console.log(Ajay.getOutput());

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Abstraction example
// By changing the way we define a function we can restrict its scope.

function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function () {
    return `First name is: ${firstname} Last 
			name is: ${lastname}`;
  };
  this.update = function (name) {
    this.firstname = name;
    // this.lastname = lname;
  };
  this.getDetails_access = function () {
    return `First name is: ${this.firstname}, Last name is: ${this.lastname}`;
  };
}
let person1 = new person("Mukul", "Latiyan");
person1.update("Rahul");
console.log(person1.firstname); // undefined
console.log(person1.getDetails_noaccess); // undefined
console.log(person1.getDetails_access()); // shows output

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Here we are using object literals to create the object
let car = {
  name: "GT",
  maker: "BMW",
  enginer: "1998cc",
  start: function () {
    console.log("Starting the engine....");
    console.log(this);
  },
};
car.brakesType = "All Disc"; // add property to class
// car.start();

car.stop = function () {
  console.log("Turning the Engine off...");
  console.log(this);
};
// car.stop();

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// JSON Objects

// const person = {
//     "name" : "Jhon",
//     "age" : 35,
//     "profession" : "Wrestler"
// }
// JSON.parse(person);  // This converts JSON object to Javascript object
