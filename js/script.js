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

//* Functions [Start]
function error(ele, color, timer = 400, originColor = "black") {
  ele.style.transition = "0.3s";
  ele.style.color = color;
  setTimeout(() => {
    ele.style.color = originColor;
    ele.style.color = originColor;
  }, timer);
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
let searchInp = document.querySelector(".search-bar input");
let buttonSearch = document.querySelector(".search-bar button");

buttonSearch.addEventListener("click", () => {
  switch (searchInp.value.toLowerCase()) {
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

    case "recently active members": {
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

    case "the schedule": {
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

    case "latest posts": {
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

    case "the features": {
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

    case "who's online": {
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

    case "recent replies": {
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

    case "recent topics": {
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
      error(searchInp, "red", 500);
    }
  }
});

//* Search Menu [Start]
let sections = document.querySelectorAll(".layout div section h2");
let searchMenu = document.querySelector(
  ".layout .left-side .search-bar .search-menu"
);

sections.forEach((section) => {
  let div = document.createElement("div");
  div.classList.add("search-menu__item");
  let text = document.createTextNode(section.textContent);
  div.append(text);
  searchMenu.append(div);
});

searchInp.addEventListener("input", () => {
  searchMenu.style.display = "flex";
  if (searchInp.value === "") {
    searchMenu.style.display = "none";
  }
});

searchInp.addEventListener("focus", () => {
  searchMenu.style.display = "flex";
});

for (let i = 0; i < searchMenu.children.length; i++) {
  searchMenu.children[i].addEventListener("click", () => {
    searchInp.value = searchMenu.children[i].textContent;
  });
}
//* Search Menu [End]
//! Search Bar [End]

//? Validate Password [Start]
let signUpContainer = document.querySelector(".sign-up");
let lockIcon = document.querySelector(".sign-up form div .lock");
let unlockIcon = document.querySelector(".sign-up form div .unlock");
let passInp = document.querySelector(".sign-up form div .password");
let confirmPassInp = document.querySelector(".sign-up form div .confirm-pass");
let signUpBtn = document.querySelector(".sign-up form div .submit");

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
year.textContent = `${
  monthsOfTheYear[new Date().getMonth()]
} ${new Date().getFullYear()}`;
prevMonth.textContent = monthsOfTheYear[new Date().getMonth() - 1];
//! schedule Date [End]
