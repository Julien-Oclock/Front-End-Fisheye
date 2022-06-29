export default function photographerTemplate(data){

    const picture = `assets/photographers/${data.portrait}`;

    return (
        `
            <a href=../photographer.html?id=${data.id} class="photographer__link" aria-label="aller à la page de ${data.name}" role="link">
                <img class="photographer__img" src=${picture} alt="portrait du photographe ${data.name}">
                <h2 class="photographer__h2">${data.name}</h2>   
                <div class="photographer__data-container" role="informations du photographe ${data.name}">
                    <span class="photographer__location">${data.city}, ${data.country}</span>
                    <span class="photographer__tagline">${data.tagline}</span>
                    <span class="photographer__price">${data.price} /jour</span>
                </div>
            </a>
        `
    )
}