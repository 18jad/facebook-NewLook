const signinBtn = document.getElementById("signin");
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".close_popup");
const eye = document.querySelector(".eye");
const back = document.querySelector(".back");
const body = document.querySelector("body");

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
