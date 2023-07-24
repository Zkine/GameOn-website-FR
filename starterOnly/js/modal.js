// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formdata");
const footer = document.querySelector(".footer");
//////////////////////////////////ouverture et fermeture de la modale\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// launch modal form
function launchModal(e) {
  const ariaClosest = e.target.closest("main");
  const closeAria = ariaClosest.querySelector(".close");
  modalbg.style.display = "block";
  footer.style.display = "none";
  //condition qui permet de basculer l'attribut aria-pressed" de false à true la croix de fermeture de la modale
  if (!closeAria.hasAttribute("style")) {
    closeAria.setAttribute("aria-pressed", false);
  }
}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la modale
function closeModal(event) {
  const baliseArticle = event.closest("aside");
  const formValue = baliseArticle.querySelector("#formulaire");
  if (baliseArticle.hasAttribute("style") && formValue) {
    baliseArticle.removeAttribute("style");
    event.setAttribute("aria-pressed", true);
    inputMail.style.backgroundColor = "white";
    footer.style.display = "flex";
    // reset du formulaire après la fermeture
    document.reserve.reset();
  } else if (baliseArticle.hasAttribute("style") && !formValue) {
    baliseArticle.removeAttribute("style");
    event.setAttribute("aria-pressed", true);
    footer.style.display = "flex";
    // reload du formulaire après la fermeture de validation
    location.reload();
  }
}

//////////////////////////////////contrôle du formulaire\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const regExpNomPrenom = new RegExp("^[a-zA-Z]{0,10}[ -]{0,1}[a-zA-Z]{2,10}$");
const regExpEmail = new RegExp(
  "^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]{2,4}$"
);
// vérification du prénom
const inputPrenom = document.getElementById("first");
inputPrenom.addEventListener("input", (e) => {
  e.stopPropagation();
  const testPrenom = regExpNomPrenom.test(inputPrenom.value);
  if (testPrenom) {
    formData[0].dataset.errorVisible = false;
  } else {
    formData[0].dataset.errorVisible = true;
  }
});

// vérification du nom
const inputNom = document.getElementById("last");
inputNom.addEventListener("input", (e) => {
  e.stopPropagation();
  const testNom = regExpNomPrenom.test(inputNom.value);
  if (testNom) {
    formData[1].dataset.errorVisible = false;
  } else {
    formData[1].dataset.errorVisible = true;
  }
});

// vérification de l'email
const inputMail = document.getElementById("email");

inputMail.addEventListener("input", (e) => {
  e.stopPropagation();
  const testMail = regExpEmail.test(inputMail.value);
  if (testMail) {
    formData[2].dataset.errorVisible = false;
  } else {
    formData[2].dataset.errorVisible = true;
  }
});

// vérification de la date de naissance
const inputDateNaissance = document.getElementById("birthdate");
inputDateNaissance.addEventListener("input", (e) => {
  e.stopPropagation();
  const inputAge = inputDateNaissance.value;
  const testNaissance = inputDateNaissance.reportValidity();
  const date = new Date(inputAge);
  const month_diff = Date.now() - date.getTime();
  const age_dt = new Date(month_diff);
  const année = age_dt.getUTCFullYear();
  const age = Math.abs(année - 1970);
  if (testNaissance && age > 13) {
    formData[3].dataset.errorVisible = false;
  } else {
    formData[3].dataset.errorVisible = true;
  }
});

// vérification du nombre de tournois joués
const inputQuantity = document.getElementById("quantity");
inputQuantity.addEventListener("input", (e) => {
  e.stopPropagation();
  testQuantity = inputQuantity.reportValidity();
  if (testQuantity) {
    formData[4].dataset.errorVisible = false;
  } else {
    formData[4].dataset.errorVisible = true;
  }
});

// vérification des conditions générales d'utilisation
const inputConditionGene = document.getElementById("checkbox1");
inputConditionGene.addEventListener("change", (e) => {
  e.stopPropagation();
  if (e.target.checked) {
    formData[6].dataset.errorVisible = false;
  } else {
    formData[6].dataset.errorVisible = true;
  }
});

//////////////////////////////////validation du formulaire\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function validate(e) {
  e.preventDefault();

  const testPrenom = regExpNomPrenom.test(inputPrenom.value);
  const testNom = regExpNomPrenom.test(inputNom.value);
  const testMail = regExpEmail.test(inputMail.value);
  const testNaissance = inputDateNaissance.reportValidity();
  const testQuantity = inputQuantity.reportValidity();

  if (!testPrenom) {
    formData[0].dataset.errorVisible = true;
  } else if (testPrenom) {
    formData[0].dataset.errorVisible = false;
  }

  if (!testNom) {
    formData[1].dataset.errorVisible = true;
  } else if (testNom) {
    formData[1].dataset.errorVisible = false;
  }

  if (!testMail) {
    formData[2].dataset.errorVisible = true;
  } else if (testMail) {
    formData[2].dataset.errorVisible = false;
  }

  if (!testNaissance) {
    formData[3].dataset.errorVisible = true;
  } else if (testNaissance) {
    formData[3].dataset.errorVisible = false;
  }

  if (!testQuantity) {
    formData[4].dataset.errorVisible = true;
  } else if (testQuantity) {
    formData[4].dataset.errorVisible = false;
  }

  if (!inputConditionGene.checked) {
    formData[6].dataset.errorVisible = true;
  } else if (inputConditionGene.checked) {
    formData[6].dataset.errorVisible = false;
  }

  if (
    testPrenom &&
    testNom &&
    testMail &&
    testNaissance &&
    testQuantity &&
    inputConditionGene.checked
  ) {
    document.querySelector(
      ".modal-body"
    ).innerHTML = `<div class="conteneur-inscription"><p class="titre-inscription">Merci pour </br> votre inscription</p></div>
    <button class="btn-submit" onclick="closeModal(this)">Fermer</button>`;
  }
}
