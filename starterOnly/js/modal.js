// DOM Elements
const modalbg = document.querySelector(".bground");
const modalclose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modale
function closeModal(event) {
  event.stopPropagation();
  const baliseArticle = event.target.closest("aside");
  if (baliseArticle.hasAttribute("style")) {
    baliseArticle.removeAttribute("style");
  }
}
modalclose.addEventListener("click", closeModal);
