const form = document.getElementById("contact_form");
const firstName = document.querySelector("#firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementsByClassName("modal__submit")

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const errorMessage = {
    name:"Votre nom/prénom doit comporter au moins 2 characters",
    mail:"Le format du mail n'est pas valide",
    message:"Votre message doit comporter au moins 10 characters"
};


function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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
    if ((string.length >=2) && (string.length)){
      return true
    } else false
  };

//Check si la string est supérieur ou égale à 10 charactère
const checkMessage = (string) => {
    if ((string.length >=10) && (string.length)){
        return true
    } else false
}

//Check si la string est un email valide
const validEmail = (string) => {
    if (regexEmail.test(string)){
        return true
    } else false
}


const handleFirstnameInput = (event) =>{
    if (!validName(event.target.value)){
        firstName.style.border = '3px solid #fe142f';
        document.querySelector('#firstname_error').innerHTML = errorMessage.name;
        console.log('false')
    }else {
        firstName.style.border = 'none';
        document.querySelector('#firstname_error').innerHTML = "";
    }
}

const handleLastnameInput = (event) =>{ 
    if (!validName(event.target.value)) {
        lastName.style.border = '3px solid #fe142f';
        document.querySelector('#lastname_error').innerHTML = errorMessage.name;
        console.log('false')
    } else {
        lastName.style.border = 'none';
        document.querySelector('#lastname_error').innerHTML = "";
    }
}

const handleMailInput = (event) => {
    if (!regexEmail.test(event.target.value)) {
        email.style.border = '3px solid #fe142f';
        document.querySelector('#email_error').innerHTML = errorMessage.mail;
    } else {
        email.style.border = 'none';
        document.querySelector('#email_error').innerHTML = "";
    }; 
}

const handleMessageInput = (event) => {
    if (!checkMessage(event.target.value)) {
        message.style.border = '3px solid #fe142f';
        document.querySelector('#message_error').innerHTML = errorMessage.message;
    } else {
        message.style.border = 'none';
        document.querySelector('#message_error').innerHTML = "";
    }
}

console.log(firstName)

firstName.addEventListener('change', handleFirstnameInput);
lastName.addEventListener('change', handleLastnameInput);
email.addEventListener('change', handleMailInput);  
message.addEventListener('change', handleMessageInput);


const validForm = (event) => {
    event.preventDefault();
    let messageObjet = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        message: message.value
    }
    if (validName(firstName.value) && validName(lastName.value) && validEmail(email.value) && checkMessage(message.value)) {
        console.log(messageObjet)
        return messageObjet;
    } else {
        console.log("invalid form")
        return false
        
    }
}



