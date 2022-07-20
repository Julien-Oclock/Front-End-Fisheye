import photographerDetailsFactory from '../factories/photographerDetails.js';
import PhotographerModel from "../models/Photographer.js";
import mediaFactory from '../factories/media.js';
import Images from '../models/Images.js';
import Video from '../models/Video.js';
//import modal from '../template/modal.js';


//get photographer id with URL parameter
function getPhotographerId() {
  return new URL(window.location.href).searchParams.get('id');
}
// fecth data from JSON file
async function getPhotographerData(id) {
  let foundedPhotographer
  await fetch(`../data/photographers.json`)
    .then(res => res.json())
    .then((data) => {
      const photographersObject = data.photographers
      foundedPhotographer = photographersObject.find(e => e.id == id)
    })
  return foundedPhotographer
}

// fetch data of a specific photographer from JSON file
async function getPhotographerMedia(photographerId) {
  let foundedMedia;
  await fetch(`../data/photographers.json`)
    .then(res => res.json())
    .then((data) => {
      const mediaObject = data.media;
      foundedMedia = mediaObject.filter(e => e.photographerId == photographerId)
    })
  return foundedMedia;
}

// display photographer data to the DOM
function displayPhotographerData(data) {
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new PhotographerModel(data);
  const photographerCard = photographerDetailsFactory(photographerModel);
  const getDataInDOM = photographerCard.getDataInDOM();
  photographersSection.appendChild(getDataInDOM)
}

// dsiplay media data to the DOM
function displayMediaData(medias, photographe) {
  const mediasSection = document.querySelector(".media");
  let totalLike = 0
  medias.forEach((media) => {
    if (media.image) {
      const photoModel = new Images(media);
      const photoItem = mediaFactory(photoModel, photographe);
      const getMediaDOM = photoItem.getMediaDOM();
      mediasSection.appendChild(getMediaDOM);
      totalLike += media.likes;
    } else if (media.video) {
      const videoModel = new Video(media);
      const videoItem = mediaFactory(videoModel, photographe);
      const getMediaDOM = videoItem.getMediaDOM();
      mediasSection.appendChild(getMediaDOM);
      totalLike += media.likes

    }
  })
  const like = document.querySelector(".card__likes-value");
  like.textContent = totalLike;
  const price = document.querySelector(".card__price");
  price.textContent = photographe.price + '€/jour';
}

function displayModalData(photographer) {

  const modalTitle = document.querySelector(".modal__title");
  const firstName = photographer.name.split(' ')[0];
  modalTitle.textContent = `Contactez moi ${firstName}`;
}

async function init() {
  const id = await getPhotographerId();
  const photographe = await getPhotographerData(id);
  await displayPhotographerData(photographe);
  const medias = await getPhotographerMedia(id)
  await displayMediaData(medias, photographe);
  displayModalData(photographe);


}

init()





