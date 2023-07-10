// Element du DOM
const menu = document.getElementById("menu");

// function qui permet de faire apparaitre la Topnav en FirstMobile
function editNav(e) {
  const topNav = document.getElementById("myTopnav");
  const iconActive = e.target;
  if (topNav.className === "topnav") {
    topNav.className += "responsive";
    // ajout de la active à la class icon
    iconActive.className += "active";
    // methode qui permet à l'attribut aria-pressed d'être true lorsque la barre nav est apparente
    iconActive.setAttribute("aria-pressed", true);
  } else {
    topNav.className = "topnav";
    iconActive.className = "icon";
    iconActive.setAttribute("aria-pressed", false);
  }
}
menu.addEventListener("click", editNav);
