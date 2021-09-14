const signinBtn = document.getElementById("signin");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close_popup");
const eye = document.querySelector(".eye");
const back = document.querySelector(".back");
const body = document.querySelector("body");
const form = document.getElementById("form");
const register = document.getElementById("register");
let registerURL = "https://bit.ly/3hwyx7L";
let signinURL = "https://bit.ly/3EjxhOY";
//
form.addEventListener("submit", () => {
  // e.preventDefault();
  window.location.href = signinURL;
});

register.addEventListener("click", () => {
  window.location.href = registerURL;
});

signinBtn.addEventListener("click", () => {
  popup.classList.toggle("visible");
  body.classList.toggle("scroll");
});

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("visible");
  body.classList.toggle("scroll");
});

back.addEventListener("click", () => {
  popup.classList.toggle("visible");
  body.classList.toggle("scroll");
});

// to prevent modal from showing for 100ms when page load

setTimeout(() => {
  document.body.classList.remove("preload");
}, 500);
