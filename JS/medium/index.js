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
console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser[mySmb]);

JsUser.email = "rahul@dfad.com";
console.log(JsUser.email);
Object.freeze(JsUser); // This is how we can freeze the object so that it cannot be updated
JsUser.email = "hello@gaming.com";
console.log(JsUser.email);
