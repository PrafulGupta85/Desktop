// Constructor Function

function User(username, email, isLoggedIn) {
  (this.username = username),
    (this.email = email),
    (this.isLoggedIn = isLoggedIn);

  this.greet = function () {
    console.log(`Hello ${this.username}, email: ${this.email}`);
    console.log(this);
  };
  this.update = function (name) {
    this.username = name;
  };
}

const userOne = new User("Yash", "yash@gz.com", true);
userOne.greet();
userOne.update("Rahul");

function Car(carName, carBrand, carPrice) {
  (this.carName = carName),
    (this.carBrand = carBrand),
    (this.carPrice = carPrice);

  this.getDetails = function () {
    return `The ${carName} is of ${carBrand} company and have price of ${carPrice} `;
  };
  this.setCarBrand = function (carBrand) {
    this.carBrand = carBrand;
  };
}

const bmwCar = new Car("730d", "BMW", 70);

// bmwCar.setBrand("Volvo");
// bmwCar.getDetails();

const audiCar = new Car("q3", "Audi", 90);
