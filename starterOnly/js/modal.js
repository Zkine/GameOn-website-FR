// DOM Elements
const modalbg = document.querySelector(".bground");
const modalclose = document.querySelector(".close");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
console.log(modalBtn);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modale
function closeModal(event) {
  const baliseArticle = event.target.closest("aside");
  if (baliseArticle.hasAttribute("style")) {
    baliseArticle.removeAttribute("style");
    // reset du formulaire après la fermeture
    document.reserve.reset();
  }
}
modalclose.addEventListener("click", closeModal);
