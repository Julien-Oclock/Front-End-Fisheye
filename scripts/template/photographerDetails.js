export default function photographerDetailsTemplate(data) {
    return (
        `
            <section class="photographer-details" aria-label="information du photographe">
                <h2 class="photographer-details__name"  tabindex="0"> ${data.name}</h2>
                <p class="photographer-details__location" tabindex="0">${data.city}, ${data.country} </p>
                <p class="photographer-details__tagline" tabindex="0">${data.tagline}</p>
            </section>
            <section class="contact">
                <button role="bouton" aria-label="ouvrir le formulaire de contact" id="contact" class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </section>
            <section class="photographer-picture">
                <img class="photographer-picture__img" src="${data.path}" alt="portrait ${data.name}">
            </section> 
        `
    )
}