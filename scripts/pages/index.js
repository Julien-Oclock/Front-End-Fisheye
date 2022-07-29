import photographerFactory from "../factories/photographer.js";
import PhotographerModel from "../models/Photographer.js";

async function getPhotographers() {
    let photographers = []
    fetch("../../data/photographers.json")
        .then(res => res.json())
        .then(data => {
            photographers = data.photographers;
        })
        .then(() => {displayData(photographers)})
        return {photographers}
}
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer");
    photographers.forEach((photographer) => {
        const photographerModel = new PhotographerModel(photographer)
        const photographerCard = photographerFactory(photographerModel);
        const userCardDOM = photographerCard.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers)
};


init()