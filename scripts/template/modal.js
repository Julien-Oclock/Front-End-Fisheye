export default function modal(photographer){
    return(
        `
        <div class="modal__content">
            <span onClick="closeModal()" id="close_modal" class="modal__close">&times;</span>
            <h2 id="modalTitle">Contactez moi ${photographer.name}</h2>  
            <form method="post">
                <label class="modal__label" for="firstname">Prénom</label>
                <span class="modal__error" id="firstname_error"></span>
                <input class="modal__input" type="text" id="firstname" name="firstname" placeholder="Votre Prénom" required>
                <label class="modal__label" for="lastname">Nom</label>
                <span class="modal__error" id="lastname_error"></span>
                <input class="modal__input" type="text" id="lastname" name="lastname" placeholder="Votre nom" required>
                <label class="modal__label" for="email">Email</label>
                <span class="modal__error" id="email_error"></span>
                <input class="modal__input" type="email" id="email" name="email" placeholder="Votre email" required>
                <label class="modal__label" for="message">Message</label>
                <span class="modal__error" id="message_error"></span>
                <textarea class="modal__text-area" id="message" name="message" placeholder="Votre message" required></textarea>
                <input class="modal__submit" type="submit" value="Envoyer">
            </form>
        </div> 
        `
    )
}

