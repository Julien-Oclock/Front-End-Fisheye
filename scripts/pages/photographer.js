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
const getPhotographerData = async(id) => {
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
const  getPhotographerMedia = async (photographerId) => {
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
const  displayPhotographerData = (data) =>{
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
  const sortOptions = document.querySelector(".media-sort__select");
  console.log(popularity)
  console.log(date)
  console.log(title)

  sortOptions.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value === "Popularité") {
        console.log("popularity");
        document.querySelector(".media").innerHTML = "";
        medias.sort(OrderByLikes);
        displayMediaData(medias, photographe);
    } else if (e.target.value === "Date") {
        console.log("date");
        document.querySelector(".media").innerHTML = "";
        medias.sort(OrderByDate);
        displayMediaData(medias, photographe);
    } else if (e.target.value === "Titre") {
      console.log("title")
        document.querySelector(".media").innerHTML = "";
        medias.sort(OrderByTitle);
        displayMediaData(medias, photographe);
    }
    else{
      alert("erreur : l'option de tri n'existe pas")
    }
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


    like.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
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
      }
    })
  })
}



const init = async () => {
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





