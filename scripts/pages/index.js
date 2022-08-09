import photographerFactory from "../factories/photographer.js";
import PhotographerModel from "../models/Photographer.js";

async function getPhotographers() {
    let photographers = []
    fetch("./data/photographers.json")// get data from JSON file
        .then(res => res.json())
        .then(data => {
            photographers = data.photographers;
        })
        .then(() => { displayData(photographers) })
    return { photographers }
}

// display data in DOM
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer");
    photographers.forEach((photographer) => {
        const photographerModel = new PhotographerModel(photographer)
        const photographerCard = photographerFactory(photographerModel);
        const userCardDOM = photographerCard.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// INIT function
async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers)
};


init()