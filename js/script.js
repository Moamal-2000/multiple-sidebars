"use strict";

//* Variables [Start]

let membersSection = document.querySelector(".layout .members");
let groupsSection = document.querySelector(".layout .groups");
let activeMembersSection = document.querySelector(
  ".layout .recent-active-members"
);
let scheduleSection = document.querySelector(".layout .schedule");
let sliderImgsSection = document.querySelector(".layout .slider-imgs");
let latestActivitySection = document.querySelector(".layout .latest-activity");
let postsSection = document.querySelector(".layout .posts");
let featuresSection = document.querySelector(".layout .features");
let signInSection = document.querySelector(".layout .sign-in");
let statisticsSection = document.querySelector(".layout .statistics");
let whoIsOnlineSection = document.querySelector(".layout .who-is-online");
let repliesSection = document.querySelector(".layout .replies");
let topicsSection = document.querySelector(".layout .topics");

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
let layer2 = document.querySelector(".layer2");
let layer3 = document.querySelector(".layer3");
let layer4 = document.querySelector(".layer4");

signUpButton.addEventListener("click", () => {
  overlay.style.display = "block";
  signUpForm.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});

signUpForm.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});

layer2.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});

layer3.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});

layer4.addEventListener("click", () => {
  overlay.style.display = "none";
  signUpForm.style.display = "none";
});

//! Popup sign up form [End]

//? Search Bar [Start]
let searchInp = document.querySelector(".search-bar input");
let buttonSearch = document.querySelector(".search-bar button");

buttonSearch.addEventListener("click", () => {
  switch (searchInp.value) {
    case "members": {
      window.scrollTo(
        0,
        scrollY +
          membersSection.offsetHeight +
          membersSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "groups": {
      window.scrollTo(
        0,
        scrollY +
          groupsSection.offsetHeight +
          groupsSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "recent active members": {
      window.scrollTo(
        0,
        scrollY +
          activeMembersSection.offsetHeight +
          activeMembersSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "schedule": {
      window.scrollTo(
        0,
        scrollY +
          scheduleSection.offsetHeight +
          scheduleSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "latest activity": {
      window.scrollTo(
        0,
        scrollY +
          latestActivitySection.offsetHeight +
          latestActivitySection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "posts": {
      window.scrollTo(
        0,
        scrollY +
          postsSection.offsetHeight +
          postsSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "features": {
      window.scrollTo(
        0,
        scrollY +
          featuresSection.offsetHeight +
          featuresSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "sign in": {
      window.scrollTo(
        0,
        scrollY +
          signInSection.offsetHeight +
          signInSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "statistics": {
      window.scrollTo(
        0,
        scrollY +
          statisticsSection.offsetHeight +
          statisticsSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "who is online": {
      window.scrollTo(
        0,
        scrollY +
          whoIsOnlineSection.offsetHeight +
          whoIsOnlineSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "replies": {
      window.scrollTo(
        0,
        scrollY +
          repliesSection.offsetHeight +
          repliesSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    case "topics": {
      window.scrollTo(
        0,
        scrollY +
          topicsSection.offsetHeight +
          topicsSection.offsetTop -
          innerHeight
      );
      searchInp.value = "";
      break;
    }

    default: {
      searchInp.style.transition = "0.3s";
      searchInp.style.color = "red";
      setTimeout(() => {
        searchInp.style.color = "black";
      }, 500);
    }
  }
});
//? Search Bar [End]
