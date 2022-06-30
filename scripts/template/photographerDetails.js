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
            <section class="card" aria-label=" tarif du photographe et nombres de like">
                <p aria_label="nombres de likes" class="card__likes">
                    122824
                    <i class="fa-solid fa-heart"></i>
                </p>
                <p aria-label="prix à la journée" class="card__price">${data.price}&#x20AC;/jour</p>
            </section>
            
        `
    )
}