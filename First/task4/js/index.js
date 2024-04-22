function add() {
  let firstInput = document.querySelector(".firstInput").value;
  let secondInput = document.querySelector(".secondInput").value;
  let output = document.querySelector(".output");

  const ans = Number(firstInput) + Number(secondInput);
  output.innerText = ans;
}
