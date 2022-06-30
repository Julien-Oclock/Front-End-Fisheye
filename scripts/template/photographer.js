export default function photographerTemplate(data){

    const picture = `assets/photographers/${data.portrait}`;

    return (
        `
            <a href="../photographer.html?id=${data.id}" class="photographer__link" aria-label="aller à la page de ${data.name}" role="link">
                <img class="photographer__img" src=${picture} alt="portrait du photographe ${data.name}">
                <h2 class="photographer__name">${data.name}</h2>   
                <section id="${data.name}" class="photographer__data-container" role="informations du photographe ${data.name}">
                    <span aria-describedby="${data._name}" class="photographer__location">${data.city}, ${data.country}</span>
                    <span aria-describedby="${data.name}" class="photographer__tagline">${data.tagline}</span>
                    <span aria-describedby="${data.name}" class="photographer__price">${data.price} /jour</span>
                </section>
            </a>
        `
    )
}