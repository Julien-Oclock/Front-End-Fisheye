import photographerTemplate from "../template/photographer.js";

function photographerFactory(data) {

    const HTMLContent = photographerTemplate(data)

    function getUserCardDOM() {
        const article = document.createElement("article");
        article.innerHTML = HTMLContent;
        return (article);
    }
    return { getUserCardDOM }
}

export default photographerFactory;