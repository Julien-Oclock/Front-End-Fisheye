export default function modal(photographer){
    return(
        `
        <div class="modal__content">
            <span onClick="closeModal()" id="close_modal" class="modal__close">&times;</span>
            <h2 id="modalTitle">Contactez moi ${photographer.name}</h2>  
            <form method="post">
                <label class="modal__label" for="firstname">Prénom</label>
                <input class="modal__input" type="text" id="firstname" name="firstname" placeholder="Votre Prénom" required>
                <label class="modal__label" for="lastname">Nom</label>
                <input class="modal__input" type="text" id="lastname" name="lastname" placeholder="Votre nom" required>
                <label class="modal__label" for="email">Email</label>
                <input class="modal__input" type="email" id="email" name="email" placeholder="Votre email" required>
                <label class="modal__label" for="message">Message</label>
                <textarea class="modal__text-area" id="message" name="message" placeholder="Votre message" required></textarea>
                <input class="modal__submit" type="submit" value="Envoyer">
            </form>
        </div> 
        `
    )
}