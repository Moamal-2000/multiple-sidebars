"use strict";
//* Variables [Start]
const membersSection = document.querySelector(".layout .members"),
  groupsSection = document.querySelector(".layout .groups"),
  activeMembersSection = document.querySelector(
    ".layout .recent-active-members"
  ),
  scheduleSection = document.querySelector(".layout .schedule"),
  sliderImgsSection = document.querySelector(".layout .slider-imgs"),
  latestActivitySection = document.querySelector(".layout .latest-activity"),
  postsSection = document.querySelector(".layout .posts"),
  featuresSection = document.querySelector(".layout .features"),
  signInSection = document.querySelector(".layout .sign-in"),
  statisticsSection = document.querySelector(".layout .statistics"),
  whoIsOnlineSection = document.querySelector(".layout .who-is-online"),
  repliesSection = document.querySelector(".layout .replies"),
  topicsSection = document.querySelector(".layout .topics"),
  overlay = document.querySelector(".overlay"),
  leftSideSections = document.querySelectorAll(".left-side section"),
  middleSideSections = document.querySelectorAll(".middle-side section"),
  rightSideSections = document.querySelectorAll(".right-side section"),
  signInForm = document.querySelector(".right-side .sign-in");

const allSections = [
  ...leftSideSections,
  ...middleSideSections,
  ...rightSideSections,
  signInForm,
];

// Unneeded element of search bar
allSections.shift();

//* Variables [End]

//* Functions [Start]
function error(ele, color, timer = 400, originalColor = "black") {
  ele.style.transition = "0.3s";
  ele.style.color = color;
  setTimeout(() => {
    ele.style.color = originalColor;
  }, timer);
}

function sectionEffect(section) {
  searchMenu.style.display = "none";
  section.style.backgroundColor = "black";
  setTimeout(() => {
    section.style.backgroundColor = "white";
    setTimeout(() => {
      section.style.backgroundColor = "black";
      setTimeout(() => {
        section.style.backgroundColor = "white";
      }, 400);
    }, 400);
  }, 400);
}
//* Functions [End]

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

//? Popup sign up form [Start]
let signUpButton = document.querySelector(".sign-in .create-account");
let signUpForm = document.querySelector(".sign-up");
signUpButton.addEventListener("click", () => {
  overlay.style.display = "block";
  signUpForm.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});
//? Popup sign up form [End]

//! Search Bar [Start]
const searchInp = document.querySelector(".search-bar input"),
  buttonSearch = document.querySelector(".search-bar button");
let focusedOnSearchBar = false;

window.addEventListener("click", (e) => {
  e.target.className === "search-bar"
    ? (focusedOnSearchBar = true)
    : (focusedOnSearchBar = false);

  if (!focusedOnSearchBar) searchMenu.style.display = "none";
});

window.addEventListener("keypress", (e) => {
  e.code === "Enter" && focusedOnSearchBar ? buttonSearch.click() : "";
});

buttonSearch.addEventListener("click", () => {
  let correctNameSection = false;

  sectionsTitle.forEach((section) => {
    if (section.textContent === searchInp.value) {
      correctNameSection = true;
      window.scrollTo(
        0,
        scrollY +
          section.parentElement.offsetHeight +
          section.parentElement.offsetTop -
          window.innerHeight
      );
      sectionEffect(section.parentElement);
      // searchInp.value = "";
    }
  });

  if (!correctNameSection) error(searchInp, "red");
});

//* Search Menu [Start]
const sectionsTitle = document.querySelectorAll(".layout .primary-title");
const searchMenu = document.querySelector(
  ".layout .left-side .search-bar .search-menu"
);

sectionsTitle.forEach((section) => {
  let div = document.createElement("div");
  div.classList.add("search-menu__item");
  let text = document.createTextNode(section.textContent);
  div.append(text);
  searchMenu.append(div);
});

searchInp.addEventListener("input", () => {
  searchMenu.style.display = "flex";
  if (searchInp.value === "") searchMenu.style.display = "none";
});

searchInp.addEventListener("focus", () => {
  searchMenu.style.display = "flex";
});

// Clicking on name the section will auto complete the word
// And do search automatically
for (let i = 0; i < searchMenu.children.length; i++) {
  searchMenu.children[i].addEventListener("click", () => {
    searchInp.value = searchMenu.children[i].textContent;
    buttonSearch.click();
  });
}
//* Search Menu [End]
//! Search Bar [End]

//? Validate Password [Start]
const signUpContainer = document.querySelector(".sign-up"),
  lockIcon = document.querySelector(".sign-up form div .lock"),
  unlockIcon = document.querySelector(".sign-up form div .unlock"),
  passInp = document.querySelector(".sign-up form div .password"),
  confirmPassInp = document.querySelector(".sign-up form div .confirm-pass"),
  signUpBtn = document.querySelector(".sign-up form div .submit");

lockIcon.addEventListener("click", () => {
  lockIcon.style.display = "none";
  unlockIcon.style.display = "block";
  passInp.type = "text";
  confirmPassInp.type = "text";
});

unlockIcon.addEventListener("click", () => {
  unlockIcon.style.display = "none";
  lockIcon.style.display = "block";
  passInp.type = "password";
  confirmPassInp.type = "password";
});

signUpBtn.addEventListener("click", (e) => {
  if (passInp.value !== confirmPassInp.value) {
    error(passInp, "red");
    error(confirmPassInp, "red");
    e.preventDefault();
  }
});
//? Validate Password [End]

//! schedule Date [Start]
let year = document.querySelector(".schedule .year");
let days = document.querySelectorAll(".schedule .calender .numbers-days span");
let prevMonth = document.querySelector(".schedule .month");
let monthsOfTheYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
year.textContent = `${monthsOfTheYear[new Date().getMonth()]} 
${new Date().getFullYear()}`;

prevMonth.textContent = monthsOfTheYear[new Date().getMonth() - 1];

days[new Date().getDate() - 1].classList.add("active");
//! schedule Date [End]
