function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBody = document.getElementById("modal-body");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const inputFirst = document.getElementById("first");
const inputLast = document.getElementById("last");
const inputEmail = document.getElementById("email");
const inputDate = document.getElementById("birthdate");
const inputQuantity = document.getElementById("quantity");
var inputRadio = document.querySelectorAll('input[type="radio"]');
const inputCU = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) =>btn.addEventListener("click", closeModal));

// close modal
function closeModal() {
  modalbg.style.display = "none";
}

//error message
function printError(elementID, errorMessage){
  document.getElementById(elementID).innerHTML = errorMessage;
}

// submit form
function validate() {

  var prenomError = nomError = emailError = numError = radioError = cuError = dateError = true;

  //firstname validation
  if(inputFirst.value.trim().length < 2){
    printError("prenomError", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    inputFirst.style.border = "solid 2px red";
  }else{
    printError("prenomError", "");
    inputFirst.style.border = "none";
    prenomError = false;
  }

  //lastname validation
  if(inputLast.value.trim().length < 2){
    printError("nomError", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    inputLast.style.border = "solid 2px red";
  }else{
    printError("nomError", "");
    inputLast.style.border = "none";
    nomError = false;
  }

  //email validation
  var regex = /^\S+@\S+\.\S+$/;
  if(regex.test(inputEmail.value) == false) {
    printError("emailError", "Veuillez rentrer une adresse mail valide");
    inputEmail.style.border = "solid 2px red";
  }else{
    printError("emailError", "");
    inputEmail.style.border = "none";
    emailError = false;
  }

  //date validation
  var date_regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (date_regex.test(inputDate.value)) {
    printError("dateError", "");
    inputDate.style.border = "none";
    numError = false;
  }else if(inputDate.value == ""){
    printError("dateError", "Vous devez rentrer votre date de naissance.");
    inputDate.style.border = "solid 2px red";
  }else{
    printError("dateError", "Le format de la date est invalide");
    inputDate.style.border = "solid 2px red";
  }

  //turnament validation
  if(isNaN(inputQuantity.value) || inputQuantity.value == ""){
    printError("numError", "Cette valeur doit être une valeur numérique");
    inputQuantity.style.border = "solid 2px red";
  }else{
    printError("numError", "");
    inputQuantity.style.border = "none";
    numError = false;
  }

  //radio btn validation
  for (var i = 0; i < inputRadio.length; i++) {
      if (inputRadio[i].checked) {
          printError("radioError", "");
          radioError = false;  
          break;
      }else{
        printError("radioError", "Vous devez choisir une option.");
      }
  }

  //CU validation
  if(inputCU.checked){
    printError("cuError", "");
    cuError = false;
  }else{
    printError("cuError", "Veuillez accepter les conditions d'utilisation");
  }

  if(prenomError == false & nomError == false & numError == false & radioError == false & cuError == false){
    modalBody.innerHTML = "<div class='valid_submit'><p>Merci pour votre inscription</p></br><span id='fermer'>Fermer</span></div>";
    //close modal after submit
    const fermer = document.getElementById("fermer");
    fermer.addEventListener("click", closeModal);
    return true;
  }else{
    return false;
  }
}




