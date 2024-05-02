// const user = {
//   id: 1,
//   userName: "Hitesh",
//   price: 199,
// };
// function handleObject(anyObject) {
//   console.log(
//     `This object has id:${anyObject.id} and userName:${anyObject.userName}`
//   );
// }
// handleObject(user);

const addTwo = (num1, num2) => num1 + num2;
const addTwo2 = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 5));
console.log(addTwo2(4, 5));

(function IIFE(name) {
  console.log(`The IIFE is executing ${name}`);
})("hitesh");
(() => {
  console.log(`IIFE arrow function`);
})();

function sayMyName() {
  console.log("R");
  console.log("A");
  console.log("M");
  console.log("P");
  console.log("A");
  console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
  // let result = number1 + number2
  // return result
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);

// console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "rahul",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
