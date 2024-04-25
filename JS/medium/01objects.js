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
console.log(courseInstructor);

const newUser = {
  id: 1,
  name: "Rahul",
  email: "abc@gmai.com",
};
// console.log(Object.keys(newUser));
// console.log(Object.values(newUser));
