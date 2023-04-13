"use strict";

let elDarkModeBtn = document.querySelector(".dark-mode-btn");
let elDarkModeBtnTextWrapper = document.querySelector(".dark-mode-btn-text-wrapper");

elDarkModeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");
  if (document.body.classList.toggle("dark-mode") == true) {
   elDarkModeBtnTextWrapper.textContent = "Light Mode";
  }
  else {
   elDarkModeBtnTextWrapper.textContent = "Dark Mode";
  }
});
