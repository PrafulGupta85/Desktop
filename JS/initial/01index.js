const accountId = 2123;
const accountEmail = "hitesh@gmail.com";
var accountPass = "121aqwe";
accountCity = "Jaipur";

// try not use the var, as it is a functional scope not block scope

// In case try to use let as it has a block scope

// var can be used outside the block as its value can be changed.

console.log(typeof accountCity);
console.log(accountId);

console.table([accountEmail, accountId, accountPass, accountCity]);
console.log(typeof undefined);
