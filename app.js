const closeTitleBtn = document.querySelector(".close");
const planTitle = document.querySelector(".planTitle");
const activitiesWrap = document.querySelector(".activitiesWrap");
const arrow = document.querySelector(".arrow");
const arrowUp = document.querySelector(".arrowUp");
const planWrapper = document.querySelector(".planWrapper");
const check = document.querySelectorAll(".check");
const planContainer = document.querySelectorAll(".planContainer");
const userWraps = document.querySelector(".userWraps");
const dropdown = document.querySelector(".dropdown");
const alertIcon = document.querySelector(".notifcation");
const alertDropdown = document.querySelector(".notify");
const inputCheck = document.querySelectorAll(".inputCheck");
const customCheck = document.querySelectorAll(".checkInput");
const left = document.querySelectorAll(".left");
const title = document.querySelectorAll(".title");
const details = document.querySelectorAll(".details");
const imgWraps = document.querySelectorAll(".imgWraps");

// CLOSE TITLE EVENT LISTENER
closeTitleBtn.addEventListener("click", () => {
  planTitle.classList.add("hide");
  activitiesWrap.classList.add("closedTitle");
});

// TOGGLE PLAN VISIBILITY EVENT LISTENER
arrow.addEventListener("click", () => {
  arrowUp.classList.toggle("rotate");
  planWrapper.classList.toggle("hide");
});

// SHOW PROFILE DROP DOWN EVENT LISTENER
userWraps.addEventListener("click", () => {
  if (alertDropdown.classList.contains("show")) {
    alertDropdown.classList.remove("show");
  }
  dropdown.classList.toggle("show");
});

// SHOW ALERT DROP DOWN EVENT LISTENER
alertIcon.addEventListener("click", () => {
  if (dropdown.classList.contains("show")) {
    dropdown.classList.remove("show");
  }
  alertDropdown.classList.toggle("show");
});

//TOGGLE CHECKBOX AND TOGGLE DETAILS

inputCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    for (let i = 0; i < planContainer.length; i++) {
      if (i === index) {
        planContainer[i].classList.toggle("checked", item.checked);
      } else {
        planContainer[i].classList.remove("checked");
      }
    }
  });
});

customCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.checked || !item.checked) {
      planContainer[index].classList.add("checked");
    }
    for (let i = 0; i < planContainer.length; i++) {
      if (i !== index) {
        planContainer[i].classList.remove("checked");
      }
    }
  });
});

customCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.checked || !item.checked) {
      title[index].classList.add("show");
    }

    for (let i = 0; i < title.length; i++) {
      if (i !== index) {
        title[i].classList.remove("show");
      }
    }
  });
});

customCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.checked || !item.checked) {
      left[index].classList.add("show");
    }

    for (let i = 0; i < left.length; i++) {
      if (i !== index) {
        left[i].classList.remove("show");
      }
    }
  });
});

customCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.checked || !item.checked) {
      details[index].classList.add("show");
    }

    for (let i = 0; i < details.length; i++) {
      if (i !== index) {
        details[i].classList.remove("show");
      }
    }
  });
});

customCheck.forEach((item, index) => {
  item.addEventListener("change", () => {
    if (item.checked || !item.checked) {
      imgWraps[index].classList.add("show");
    }

    for (let i = 0; i < imgWraps.length; i++) {
      if (i !== index) {
        imgWraps[i].classList.remove("show");
      }
    }
  });
});
