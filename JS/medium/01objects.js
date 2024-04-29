// This is how we declare symbols
const mySmb = Symbol("mysm1");

const JsUser = {
  name: "Hitesh",
  [mySmb]: "mysm1", // to use symbols in classes then use [symbolName]
  address: "Noida",
  "full name": "Hitesh Chaudhary",
  age: 23,
  email: "hitesh@su.com",
  isLoggedIn: false,
};

// console.log(JsUser["name"]);
// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser[mySmb]);

// Object.freeze(JsUser); // This is how we can freeze the object so that it cannot be updated
// JsUser.email = "hello@gaming.com";
// console.log(JsUser.email);

// // This is how we can create two functions greet and greet2
// JsUser.greet = function () {
//   console.log("Inside the JsUser Object");
// };
// JsUser.greet2 = function () {
//   console.log(`This is another fun2 ${this.name}`);
// };

// console.log(JsUser.greet());
// // console.log(JsUser.greet2());

// const User = {
//   email: "abc@gamil.com",
//   fullName: {
//     userName: {
//       firstName: "Ritesh",
//       lastName: "Chaudhary",
//     },
//   },
// };

// console.log(User.fullName.userName.firstName);
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj3 = { 5: "a", 6: "b" };
// const obj4 = Object.assign({}, obj1, obj2, obj3); // {} is the target in which obj1,2,3 are copied
// console.log(obj4);

const course = {
  course: "New js",
  price: 999,
  courseInstructor: "Rahul Singh",
};
const { courseInstructor } = course;
// console.log(courseInstructor);

const newUser = {
  id: 1,
  name: "Rahul",
  email: "abc@gmai.com",
};
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
const currentDate = new Date();
// console.log(currentDate);
function formatDate(currentDate) {
  const date = currentDate.getDate();
  let month = currentDate.getDay();
  const year = currentDate.getFullYear();
  if (month != 10 || month != 11) {
    month = `0${month}`;
  }
  const formmatedDate = `${date}-${month}-${year}`;
  return formmatedDate;
}
// console.log(formatDate(currentDate));

function getDayName(currentDate) {
  const day = currentDate.getDay();
  // console.log(day);
  let currDay;
  switch (day) {
    case 0:
      currDay = "Sunday";
      break;
    case 1:
      currDay = "Monday";
      break;
    case 2:
      currDay = "Tuesday";
      break;
    case 3:
      currDay = "Wednesday";
      break;
    case 4:
      currDay = "Thursday";
      break;
    case 5:
      currDay = "Friday";
      break;
    case "6":
      currDay = "Saturday";
      break;
  }
  // console.log(currDay);
  return currDay;
}
const { privateDecrypt } = require("crypto");
// getDayName(currentDate);
// console.log(getDayName(currentDate));

const os = require("os");

function getUserOS() {
  const user = process.platform;
  // const memory = process.memoryUsage();
  // const platform = navigator.platform;
  const memory = os.freemem();
  console.log(user, memory);
  // console.log(process);
  // console.log(platform);
}
getUserOS();
