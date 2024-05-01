function add() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) + Number(secondInput);
  output.innerText = ans;
}
function sub() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) - Number(secondInput);
  output.innerText = ans;
}
function mul() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) * Number(secondInput);
  output.innerText = ans;
}
function div() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) / Number(secondInput);
  output.innerText = ans;
}
function mod() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) % Number(secondInput);
  output.innerText = ans;
}
