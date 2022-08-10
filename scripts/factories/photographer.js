import photographerTemplate from "../template/photographer.js";

function photographerFactory(data) {

    // Injection des data dans le template
    const HTMLContent = photographerTemplate(data)

    // Display du template dans le DOM
    function getUserCardDOM() {
        const article = document.createElement("article");
        article.innerHTML = HTMLContent;
        return (article);
    }
    return { getUserCardDOM }
}

export default photographerFactory;