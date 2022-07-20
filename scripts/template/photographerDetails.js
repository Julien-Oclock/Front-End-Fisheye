export default function photographerDetailsTemplate (data) {
    return (
        `
            <section class="photographer-details" role="informations du photographe ${data.name}">
                <h2 class="photographer-details__name"> ${data.name}</h2>
                <p class="photographer-details__location">${data.city}, ${data.country}</p>
                <p class="photographer-details__tagline">${data.tagline}</p>
            </section>
            <section class="contact">
                <button role="bouton" aria-label="ouvrir le formulaire de contact" class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </section>
            <section class="photographer-picture" aria-label="photo de profil du photographe ${data.name}">
                <img class="photographer-picture__img" src="${data.path}" alt="portrait du photographe ${data.name}">
            </section> 
        `
    )
}