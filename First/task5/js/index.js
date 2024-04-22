const arr = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Samsung" },
  { id: 3, name: "OnePlus" },
  { id: 4, name: "Iqoo" },
  { id: 5, name: "Nothing" },
  { id: 6, name: "Vivo" },
  { id: 7, name: "Oppo" },
  { id: 8, name: "Realme" },
  { id: 9, name: "Xaomi" },
  { id: 10, name: "Motorola" },
];

const btn = document.querySelector("button");
const output = document.querySelector(".output");
let check = true;

function show() {
  let text = "";

  arr.forEach((ele) => {
    text += "<li>" + ele.id + " " + ele.name + "</li>";
  });

  console.log(text);

  output.innerHTML = text;
}

// function show() {
//   if (check) {
//     arr.forEach((ele) => {
//       let newele = document.createElement("li");
//       newele.textContent = `Id: ${ele.id}, Brand: ${ele.name}`;
//       output.appendChild(newele);
//       check = false;
//     });
//   } else {
//     alert("List already displayed");
//   }
// }

// arr.forEach((ele) => {
//   showval(ele.id, ele.name);
// });

// function showval(id, name) {
//   output.innerHTML = id + " " + name;
// }

// function showSmartphone() {
//   //   btn.addEventListener(onclick, () => {
//   arr.forEach((ele) => {
//     output.innerHTML = ele.id + " " + ele.name;
//   });
//   //   });s
// }
