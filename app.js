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
  planTitle.classList.add("closeTitle");
  activitiesWrap.classList.add("closedTitle");
});

arrow.addEventListener("click", () => {
  arrowUp.classList.toggle("rotate");
  planWrapper.classList.toggle("hide");
});

userWraps.addEventListener('click', ()=>{
  dropdown.classList.toggle('show')
})

//   for(let i = 0; i < bigWraps.length; i++){
//     bigWraps[i].addEventListener('click', ()=>{

//       if( !planContainer[i].classList.contains('show')){

//         planContainer[i].classList.add('show')
//       } else{
//         return
//       }

//     })
// }

// for (let i = 0; i < bigWraps.length; i++) {
//   bigWraps[i].addEventListener("click", () => {
//     for (let i = 0; i < planContainer.length; i++) {
//       for (let j = 0; j < planContainer.length; j++) {
//         if (planContainer[i].classList.contains("show")) {
//           return;
//         } else if (
//           planContainer[i] != planContainer[j] &&
//           planContainer[i].classList.contains("show")
//         ) { planContainer[i].classList.remove('show')
//         } 

//         planContainer[j].classList.add('show')
//       }
//     }
//   });
// }
