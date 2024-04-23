let name = "Rahul Singh";

let anotherName = name;

anotherName = "Vipul Yadav";

// Here when we assign anotherName = name then the copy of name is provided to
// anotherName not the real occurence

console.log(name);
console.log(anotherName);

let user = {
  email: "abc@gmail.com",
  upi: "afdfa",
};
let user2 = user;

// Here when we are copying then the reference is provided to user2
// Here data is stored in heap and user2 store the same data as stored by user
// Both point to same data but have different address

console.log(user);
user2.email = "xyz@gmail.com";

console.log(user);
console.log(user2);
