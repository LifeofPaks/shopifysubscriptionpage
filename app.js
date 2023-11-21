const closeTitleBtn = document.querySelector(".close");
const planTitle = document.querySelector(".planTitle");
const activitiesWrap = document.querySelector(".activitiesWrap");
const arrow = document.querySelector(".arrow");
const arrowUp = document.querySelector(".arrowUp");
const planWrapper = document.querySelector(".planWrapper");
const checkbox = document.querySelectorAll(".check");
const bigWraps = document.querySelectorAll(".bigWraps");
const planContainer = document.querySelectorAll(".planContainer");
const clickTitle = document.querySelectorAll(".clickTitle");
const userWraps = document.querySelector(".userWraps");
const dropdown = document.querySelector(".dropdown");
const alertIcon = document.querySelector(".notifcation");
const alertDropdown = document.querySelector(".notify");
const inputCheck = document.querySelectorAll(".inputCheck");


checkbox.forEach((check) => {
  check.addEventListener("click", (e) => {
    if (e.target.classList.contains("check")) {
      e.target.src =
        e.target.src === "/images/check.png"
          ? "/images/selected.png"
          : "/images/check.png";
    }
  });
});

closeTitleBtn.addEventListener("click", () => {
  planTitle.classList.add("hide");
  activitiesWrap.classList.add("closedTitle");
});

arrow.addEventListener("click", () => {
  arrowUp.classList.toggle("rotate");
  planWrapper.classList.toggle("hide");
});

userWraps.addEventListener('click', ()=>{
  if(alertDropdown.classList.contains('show')){
    alertDropdown.classList.remove('show')
  }
  dropdown.classList.toggle('show')
})

alertIcon.addEventListener('click', ()=>{
  if(dropdown.classList.contains('show')){
    dropdown.classList.remove('show')
  }
  alertDropdown.classList.toggle('show')
})




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


