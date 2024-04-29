const user = {
  id: 1,
  userName: "Hitesh",
  price: 199,
};
function handleObject(anyObject) {
  console.log(
    `This object has id:${anyObject.id} and userName:${anyObject.userName}`
  );
}
handleObject(user);

const addTwo = (num1, num2) => num1 + num2;
const addTwo2 = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 5));
console.log(addTwo2(4, 5));

(function chai(name) {
  console.log(`The IIFE is executing ${name}`);
})("hitesh");
(() => {
  console.log(`This is IIFE arrow function`);
})();
