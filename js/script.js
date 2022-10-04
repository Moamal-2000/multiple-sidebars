"use strict";

//* Variables [Start]

let overlay = document.querySelector(".overlay");

//* Variables [End]

//! Friends Buttons [Start]
let friendsButton = document.querySelectorAll(
  ".members .members__friends,.groups .members__friends"
);

friendsButton.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transitionDelay = "0s";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transitionDelay = "0.3s";
  });
});
//! Friends Buttons [End]

//? Fix remember me checkbox [Start]

let checkboxContainer = document.querySelector(".sign-in__checkbox");
let checkbox = document.querySelector(
  '.sign-in__checkbox input[type="checkbox"]'
);

checkboxContainer.addEventListener("click", () => {
  if (checkbox.checked === true) checkbox.checked = false;
  else checkbox.checked = true;
});

//? Fix remember me checkbox [End]

//! Popup sign up form [Start]

let signUpButton = document.querySelector(".sign-in .create-account");
let signUpForm = document.querySelector(".sign-up");

signUpButton.addEventListener("click", () => {
  overlay.style.display = "block";
  signUpForm.style.display = "block";
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  signUpForm.style.display = 'none';
})

//! Popup sign up form [End]
