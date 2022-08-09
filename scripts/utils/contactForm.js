const form = document.getElementById("contact_form");
const firstName = document.querySelector("#firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("modal__submit")
let main = document.querySelector('#main');

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const errorMessage = {
    name: "Votre nom/prénom doit comporter au moins 2 characters",
    mail: "Le format du mail n'est pas valide",
    message: "Votre message doit comporter au moins 10 characters"
};


function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.ariaHidden = "false";
    main.ariaHidden = "true";
    firstname.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.ariaHidden = "true";
    main.ariaHidden = "false";
}
/****
 * ************************************************************************************************
 * FONCTION DE CHECK DES DONNEES SAISIE
 * ************************************************************************************************
 */

//Check si la string est supérieur ou égale à 2 charactère
//Si string.length est supérieur ou egale à 2 charactère return true
//Sinon return false
const validName = (string) => {
    if ((string.length >= 2) && (string.length)) {
        return true
    } else false
};

//Check si la string est supérieur ou égale à 10 charactère
const checkMessage = (string) => {
    if ((string.length >= 10) && (string.length)) {
        return true
    } else false
}

//Check si la string est un email valide
const validEmail = (string) => {
    if (regexEmail.test(string)) {
        return true
    } else false
}

/**
 * ******************** fonction exécuter sur les listneners des inputs du formulaire de contact ******************************
 * */

//  Input Prénom
const handleFirstnameInput = (event) => {
    if (!validName(event.target.value)) {
        firstName.style.border = '3px solid #fe142f';
        let error = document.querySelector('#firstname_error')
        error.innerHTML = errorMessage.name;
        error.ariaHidden = "false";

    } else {
        firstName.style.border = 'none';
        document.querySelector('#firstname_error').innerHTML = "";
    }
}

// Input Nom
const handleLastnameInput = (event) => {
    if (!validName(event.target.value)) {
        lastName.style.border = '3px solid #fe142f';
        let error = document.querySelector('#lastname_error');
        error.innerHTML = errorMessage.name;
        error.ariaHidden = "false";
    } else {
        lastName.style.border = 'none';
        document.querySelector('#lastname_error').innerHTML = "";
    }
}

// Input Mail
const handleMailInput = (event) => {
    if (!regexEmail.test(event.target.value)) {
        email.style.border = '3px solid #fe142f';
        let error = document.querySelector('#email_error');
        error.innerHTML = errorMessage.mail;
        error.ariaHidden = 'false';
    } else {
        email.style.border = 'none';
        document.querySelector('#email_error').innerHTML = "";
    };
}

// input Message (text-aera)
const handleMessageInput = (event) => {
    if (!checkMessage(event.target.value)) {
        message.style.border = '3px solid #fe142f';
        error = document.querySelector('#message_error');
        error.innerHTML = errorMessage.message;
        error.ariaHidden = 'false';
    } else {
        message.style.border = 'none';
        document.querySelector('#message_error').innerHTML = "";
    }
}

firstName.addEventListener('change', handleFirstnameInput);
lastName.addEventListener('change', handleLastnameInput);
email.addEventListener('change', handleMailInput);
message.addEventListener('change', handleMessageInput);



// *************************** VALIDATION DU FORMULAIRE ***********************************************************
const validForm = (event) => {
    event.preventDefault();
    let messageObjet = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        message: message.value
    }

    if (validName(firstName.value) &&
        validName(lastName.value) &&
        validEmail(email.value) &&
        checkMessage(message.value)) {
        console.log(messageObjet)
        closeModal()
        return messageObjet;
    } else {
        console.log("invalid form")
        return

    }
}



