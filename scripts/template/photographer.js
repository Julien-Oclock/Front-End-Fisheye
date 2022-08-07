export default function photographerTemplate(data){

    const picture = `assets/photographers/${data.portrait}`;

    return (
        `
            <a href="./photographer.html?id=${data.id}" class="photographer__link" tabindex="0">
                <img class="photographer__img" src=${picture} tabindex="0">
                <h2 class="photographer__name"  tabindex="0">${data.name}</h2>   
                <section id="${data.name}" class="photographer__data-container">
                    <p location" class="photographer__location" tabindex="0">${data.city}, ${data.country}</p>
                    <p class="photographer__tagline" tabindex="0">${data.tagline}</p>
                    <aside class="photographer__price" tabindex="0">${data.price}Є/jour</aside>
                </section>
            </a>
        `
    )
}