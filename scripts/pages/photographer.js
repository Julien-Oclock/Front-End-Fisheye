import photographerDetailsFactory from '../factories/photographerDetails.js';
import PhotographerModel from "../models/Photographer.js";
import mediaFactory from '../factories/media.js';
import Images from '../models/Images.js';
import Video from '../models/Video.js';

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

async function getPhotographerMedia(photographerId){
  let foundedMedia;
  await fetch(`../data/photographers.json`)
    .then(res => res.json())
    .then((data) => {
      const mediaObject = data.media;
      foundedMedia = mediaObject.filter(e => e.photographerId == photographerId)
    })
    return foundedMedia;
}

function displayPhotographerData(data){
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new PhotographerModel(data);
  const photographerCard = photographerDetailsFactory(photographerModel);
  const getDataInDOM = photographerCard.getDataInDOM();
  photographersSection.appendChild(getDataInDOM)
}

function displayMediaData(medias){
  const mediasSection = document.querySelector(".photo-container");
  medias.forEach((media) => {
    if (media.image){
        const photoModel = new Images(media);
        const photoItem = mediaFactory(photoModel);
        const getMediaDOM = photoItem.getMediaDOM();
        mediasSection.appendChild(getMediaDOM);
    } else if (media.video){
        const videoModel = new Video(media);
        const videoItem = mediaFactory(videoModel);
        const getMediaDOM = videoItem.getMediaDOM();
        mediasSection.appendChild(getMediaDOM);
    }
  })
}




async function init() {
  const id = await getPhotographerId();
  const photographe = await getPhotographerData(id);
  displayPhotographerData(photographe);
  const medias = await getPhotographerMedia(id)
  console.log('photo ', medias);
  displayMediaData(medias);
}

init()


