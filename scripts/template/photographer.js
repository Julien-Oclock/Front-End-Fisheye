export default function photographerTemplate(data){

    const picture = `assets/photographers/${data.portrait}`;

    return (
        `
            <a href="../photographer.html?id=${data.id}" class="photographer__link" aria-label="link to ${data.name} pages" role="link" tabindex="0">
                <img class="photographer__img" src=${picture} alt="profil picture of ${data.name}" tabindex="0">
                <h2 class="photographer__name">${data.name}</h2>   
                <section id="${data.name}" class="photographer__data-container" role="photographer info of ${data.name}">
                    <span aria-describedby="${data._name}" aria-label="Photographer location" class="photographer__location" tabindex="0">${data.city}, ${data.country}</span>
                    <span aria-describedby="${data.name}" aria-label="Photographer tagline" class="photographer__tagline" tabindex="0">${data.tagline}</span>
                    <span aria-describedby="${data.name}" aria-label="Photographer price" class="photographer__price" tabindex="0">${data.price}Є/jour</span>
                </section>
            </a>
        `
    )
}