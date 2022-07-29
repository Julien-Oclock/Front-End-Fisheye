export default function photographerDetailsTemplate(data) {
    return (
        `
            <section class="photographer-details" role="photographer banner" aria-label="informations du photographe ${data.name}">
                <h2 class="photographer-details__name"  aria-label="photographer name"  > ${data.name}</h2>
                <p class="photographer-details__location" aria-label="photographer location" tabindex="0">${data.city}, ${data.country} </p>
                <p class="photographer-details__tagline"  aria-label="photographer tagline" tabindex="0"    >${data.tagline}</p>
            </section>
            <section class="contact">
                <button role="bouton" aria-label="open contact modal" id="contact" class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </section>
            <section class="photographer-picture">
                <img class="photographer-picture__img" src="${data.path}" alt="profile picture of ${data.name}">
            </section> 
        `
    )
}