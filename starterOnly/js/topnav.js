// function qui permet de faire apparaitre la Topnav en FirstMobile
function editNav(e) {
  const topNav = document.getElementById("myTopnav");
  const iconActive = e;
  if (topNav.className === "topnav") {
    topNav.className += "responsive";
    // ajout le mot active à la suite de class icon
    iconActive.className += "active";
    // methode qui permet à l'attribut aria-pressed d'être true lorsque la barre nav est apparente
    iconActive.setAttribute("aria-pressed", true);
  } else {
    topNav.className = "topnav";
    iconActive.className = "icon";
    iconActive.setAttribute("aria-pressed", false);
  }
}
