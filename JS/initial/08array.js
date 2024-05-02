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

const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["lithum", "iron"];

const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[1]);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

console.log("--------------------------------");
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
