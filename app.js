const closeTitleBtn = document.querySelector(".close");
const planTitle = document.querySelector(".planTitle");
const activitiesWrap = document.querySelector(".activitiesWrap");
const arrow = document.querySelector(".arrow");
const arrowUp = document.querySelector(".arrowUp");
const planWrapper = document.querySelector(".planWrapper");
const check = document.querySelectorAll(".check");
const bigWraps = document.querySelectorAll(".bigWraps");
const planContainer = document.querySelectorAll(".planContainer");
const clickTitle = document.querySelectorAll(".clickTitle");
const userWraps = document.querySelector(".userWraps");
const dropdown = document.querySelector(".dropdown");
const alertIcon = document.querySelector(".notifcation");
const alertDropdown = document.querySelector(".notify");
const inputCheck = document.querySelectorAll(".inputCheck");

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
userWraps.addEventListener('click', ()=>{
  if(alertDropdown.classList.contains('show')){
    alertDropdown.classList.remove('show')
  }
  dropdown.classList.toggle('show')
})



// SHOW ALERT DROP DOWN EVENT LISTENER
alertIcon.addEventListener('click', ()=>{
  if(dropdown.classList.contains('show')){
    dropdown.classList.remove('show')
  }
  alertDropdown.classList.toggle('show')
})




// APPLY BACKGROUND TO THE SELECTED PLAN
inputCheck.forEach((item, index) => {
  item.addEventListener('change', () => {
      for (let i = 0; i < planContainer.length; i++) {
          if (i === index) {
              planContainer[i].classList.toggle('checked', item.checked);
          } else {
              planContainer[i].classList.remove('checked');
          }
      }
  });
});


// TOGGLE CHECKBOX EVENT LISTENER
check.forEach((check) => {
  check.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      e.target.src =
        e.target.src === "/images/check.png"
          ? "/images/selected.png"
          : "/images/check.png";
    }
  });
});


