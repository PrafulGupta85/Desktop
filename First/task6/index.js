const btn = document.querySelector("#add");
const txt = document.querySelector("h3");
let flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    txt.innerHTML = "You are Friends";
    txt.style.color = "Blue";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    txt.innerHTML = "Stranger";
    btn.innerHTML = "Add Friend";
    txt.style.color = "Red";
    flag = 0;
  }
});
