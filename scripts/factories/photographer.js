function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' )
        const link = document.createElement( 'a' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}`;
        const p = document.createElement( 'p' );
        p.textContent = tagline;
        const priceTag = document.createElement( 'span' );
        priceTag.className = "price";
        priceTag.textContent = `${price}€/jour`;
        article.appendChild(link);
        link.appendChild(img);
        link.appendChild(h2);
        link.appendChild(h3);
        link.appendChild(p);
        link.appendChild(priceTag);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}

export default photographerFactory;