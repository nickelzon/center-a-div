let body = document.getElementsByTagName("body");
let container = document.querySelector(".long-container");

let input = document.querySelector(".input");
// input.focus();

input.addEventListener("focus", () => {
  body[0].style.overflowY = "hidden";
});

input.addEventListener("blur", () => {
  body[0].style.overflowY = "scroll";
});
