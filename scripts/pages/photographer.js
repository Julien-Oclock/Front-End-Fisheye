import photographerDetailsFactory from '../factories/photographerDetails.js';
import PhotographerModel from "../models/Photographer.js";

//get photographer id with URL parameter
function getPhotographerId() {
    return new URL(window.location.href).searchParams.get('id');
  }

async function getPhotographerData (id){
  let foundedPhotographer
  await fetch(`../data/photographers.json`)
      .then(res => res.json())
      .then((data) => {
        const photographersObject = data.photographers
        foundedPhotographer = photographersObject.find( e => e.id == id)
      })
      return foundedPhotographer
}

function displayData(data){
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new PhotographerModel(data);
  const photographerCard = photographerDetailsFactory(photographerModel);
  const getDataInDOM = photographerCard.getDataInDOM();
  photographersSection.appendChild(getDataInDOM)

}



async function init() {
  const id = await getPhotographerId();
  const photographe = await getPhotographerData(id)
  displayData(photographe)
}

init()


