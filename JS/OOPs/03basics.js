// Constructor Function

function User(username, email, isLoggedIn) {
  (this.username = username),
    (this.email = email),
    (this.isLoggedIn = isLoggedIn);

  this.greet = function () {
    return `Hello ${this.username}, email: ${this.email}`;
    // console.log(this);
  };
  this.update = function (name) {
    this.username = name;
  };
}

const userOne = new User("Yash", "yash@gz.com", true);
userOne.update("Rahul");
// console.log(userOne.greet());
//  -------------------------------------------------------------
function Car(carModel, carBrand, carPrice) {
  (this.carModel = carModel),
    (this.carBrand = carBrand),
    (this.carPrice = carPrice);

  this.getDetails = function () {
    return `The ${carModel} belongs to ${carBrand} company and have price of $${carPrice} `;
  };
  this.setCarBrand = function (carBrand) {
    this.carBrand = carBrand;
  };
}

const userTwo = new User("Jhon Cena", "praful@gz.com");

const bmwCar = new Car("730d", "BMW", 70);

bmwCar.setCarBrand("Volvo");
console.log(bmwCar.getDetails());
console.log(bmwCar.carPrice);

function Shape(name, noOfSides, sideLength) {
  this.name = name;
  this.noOfSides = noOfSides;

  this.sideLength = sideLength;

  this.updateName = function (newName) {
    this.name = newName;
  };
  this.updateSides = function (sides) {
    this.noOfSides = sides;
  };
  this.updaeLength = function (length) {
    this.sideLength = length;
  };
  this.showDetails = function () {
    return `${this.name} has ${noOfSides} sides of length ${sideLength}`;
  };
}
let FirstShape = new Shape("Rectangle", 4, 10);
console.log(FirstShape.showDetails());
