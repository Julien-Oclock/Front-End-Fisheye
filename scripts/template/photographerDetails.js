export default function photographerDetailsTemplate (data) {
    return (
        `
            <div class="photographer-details">
                <h2 class="photographer-details__name"> ${data.name}</h2>
                <p class="photographer-details__location">${data.city}, ${data.country}</p>
                <p class="photographer-details__tagline">${data.tagline}</p>
            </div>
            <div class="contact">
                <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
            </div>
            <div class="photographer-picture">
                <img class="photographer__img" src="${data.path}" alt="portrait du photographe ${data.name}">
            </div>
            
        `
    )
}