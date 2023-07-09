// Element du DOM
const menu = document.getElementById("menu");

// function qui permet de faire apparaitre la Topnav en FirstMobile
function editNav() {
  const topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += "responsive";
  } else {
    topNav.className = "topnav";
  }
}
menu.addEventListener("click", editNav);
