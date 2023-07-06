// DOM Elements
const menu = document.getElementById("menu");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// function qui permet de faire apparaitre la modal
function editNav() {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += "responsive";
  } else {
    topNav.className = "topnav";
  }
}
menu.addEventListener("click", editNav);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
