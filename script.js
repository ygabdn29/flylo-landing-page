"use strict";

const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.querySelector(".email-input");
const errorText = document.querySelector(".error-text");

function emailValidity(email) {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.match(valid);
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!emailValidity(emailInput.value)) {
    errorText.classList.toggle("active");
  }
});

console.log(emailValidity("jamal@gmail.com"));
