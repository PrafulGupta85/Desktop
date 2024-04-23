// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// console.log(arr);
// arr.push(7);
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// arr.pop();
// console.log(arr);
// console.log(arr);

// let arr2 = arr.splice(2, 4);
// console.log(arr2);
// console.log(arr);
// let arr3 = arr.splice(1, 6);
// console.log(arr);
// console.log(arr3);

const first = ["a", "b", "c", "d"];
const second = ["e", "f", "g", "h"];

// let third = first.concat(second);
// console.log(first);
// console.log(third);

let third = [first, second];
console.log(third);

let flat = third.flat(Infinity);
console.log(flat);
