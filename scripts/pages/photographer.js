import photographerDetailsFactory from '../factories/photographerDetails.js';
import PhotographerModel from "../models/Photographer.js";
import mediaFactory from '../factories/media.js';
import Images from '../models/Images.js';
import Video from '../models/Video.js';
//import modal from '../template/modal.js';

// initialisation du compteur de likes
let totalLike = 0;


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
const displayMediaData = (medias, photographe) =>{

  // conteneur pour afficher tout les médias
  const mediasSection = document.querySelector(".media");


  medias.forEach((media) => {
    // on vérifie le type de media reçu (image ou vidéo)

    // si c'est une image
    if (media.image) {
      const photoModel = new Images(media)
      const photoItem = mediaFactory(photoModel, photographe);
      const getMediaDOM = photoItem.getMediaDOM();
      mediasSection.appendChild(getMediaDOM);
      totalLike += media.likes;

      // si c'est une vidéo
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

// display data in contactform modal
const  displayModalData =(photographer) => {
  const modalTitle = document.querySelector(".modal__title");
  const firstName = photographer.name.split(' ')[0];
  modalTitle.textContent = `Contactez moi ${firstName}`;
}


// sort(compare) functions
const OrderByLikes = (a, b) => {
  if (a.likes > b.likes) {
    return -1;
  }
  if (a.likes < b.likes) {
    return 1;
  }
  return 0;
}

const OrderByDate = (a, b) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

const OrderByTitle = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

const sortMedia = (medias, photographe) => {
  const popularity = document.getElementById("popularity");
  const date = document.getElementById("date");
  const title = document.getElementById("title");
  console.log(popularity)
  console.log(date)
  console.log(title)

  popularity.addEventListener("click", () => {
    console.log("popularity");
    medias.sort(OrderByLikes);
    document.querySelector(".media").innerHTML = "";
    displayMediaData(medias, photographe);
  })

  date.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("date");
    document.querySelector(".media").innerHTML = "";
    medias.sort(OrderByDate);
    displayMediaData(medias, photographe);
  })

  title.addEventListener("click", () => {
    console.log("title");
    medias.sort(OrderByTitle);
    document.querySelector(".media").innerHTML = "";
    displayMediaData(medias, photographe);
  })

}

const likeshandler = () => {
  const likes = document.querySelectorAll(".media__like");
  likes.forEach((like) => {
    let liked = false
    like.addEventListener("click", (e) => {
      e.preventDefault();
      if(!liked) {
        liked=true
        totalLike++;
        const sumOfLikes = document.querySelector(".card__likes-value");
        sumOfLikes.textContent = parseInt(sumOfLikes.textContent) + 1;
        like.parentElement.querySelector(".media__count").textContent = parseInt(like.parentElement.querySelector(".media__count").textContent) + 1;
      } else {
        liked=false;
        totalLike--;
        const sumOfLikes = document.querySelector(".card__likes-value");
        sumOfLikes.textContent = parseInt(sumOfLikes.textContent) - 1;
        like.parentElement.querySelector(".media__count").textContent = parseInt(like.parentElement.querySelector(".media__count").textContent) - 1;
      }
    })


  })
}



async function init() {
  const id = await getPhotographerId();
  const photographe = await getPhotographerData(id);
  await displayPhotographerData(photographe);
  const medias = await getPhotographerMedia(id);
  await displayMediaData(medias, photographe);
  await displayModalData(photographe);
  await likeshandler();
  await sortMedia(medias, photographe);


}

init()





