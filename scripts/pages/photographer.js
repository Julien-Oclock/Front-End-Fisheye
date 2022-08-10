import photographerDetailsFactory from '../factories/photographerDetails.js';
import PhotographerModel from "../models/Photographer.js";
import mediaFactory from '../factories/media.js';
import Images from '../models/Images.js';
import Video from '../models/Video.js';


// initialisation du compteur de likes
let totalLike = 0;

//fichier jSON
const fectURL = './data/photographers.json'

//get photographer id with URL parameter
function getPhotographerId() {
  return new URL(window.location.href).searchParams.get('id');
}


// fecth data from JSON file
const getPhotographerData = async (id) => {
  let foundedPhotographer
  await fetch(fectURL)
    .then(res => res.json())
    .then((data) => {
      const photographersObject = data.photographers
      foundedPhotographer = photographersObject.find(e => e.id == id)
    })
  return foundedPhotographer
}

// fetch data of a specific photographer from JSON file
const getPhotographerMedia = async (photographerId) => {
  let foundedMedia;
  await fetch(fectURL)
    .then(res => res.json())
    .then((data) => {
      const mediaObject = data.media;
      foundedMedia = mediaObject.filter(e => e.photographerId == photographerId)
    })
  return foundedMedia;
}

// display photographer data to the DOM
const displayPhotographerData = (data) => {
  const photographersSection = document.querySelector(".photograph-header");
  const photographerModel = new PhotographerModel(data);
  const photographerCard = photographerDetailsFactory(photographerModel);
  const getDataInDOM = photographerCard.getDataInDOM();
  photographersSection.appendChild(getDataInDOM)
}

// dsiplay media data to the DOM
const displayMediaData = (medias, photographe) => {

  // conteneur pour afficher tout les médias
  const mediasSection = document.querySelector(".media");


  medias.forEach((media) => {
    // on vérifie le type de media reçu (image ou vidéo) et on l'ajoute au DOM

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

  // une fois que les medias sont chargé on s'occupe de d'afficher le total de like et le tarif journalier du photographe
  const like = document.querySelector(".card__likes-value");
  like.textContent = totalLike;
  const price = document.querySelector(".card__price");
  price.textContent = photographe.price + '€/jour';
}

// display data in contactform modal
const displayModalData = (photographer) => {
  const modalTitle = document.querySelector(".modal__title");
  const firstName = photographer.name.split(' ')[0];
  modalTitle.textContent = `Contactez moi ${firstName}`;
}


// sort(compare) functions

// trie par Like (popularity)
const OrderByLikes = (a, b) => {
  if (a.likes > b.likes) {
    return -1;
  }
  if (a.likes < b.likes) {
    return 1;
  }
  return 0;
}

// trie par date
const OrderByDate = (a, b) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

// trie par ordre alphabetique (titre)
const OrderByTitle = (a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

// 
const sortMedia = (medias, photographe) => {

  // on vient ciblé l'élément HTML "select" qui servira de selecteur d'options de trie
  const sortOptions = document.querySelector(".media-sort__select");

  // j'utilise un écouteur d"évènement sur cet élément HTML afin d'appliquer les bonnes options de trie.
  sortOptions.addEventListener("change", (e) => {
    e.preventDefault();
    if (e.target.value === "Popularité") {

      document.querySelector(".media").innerHTML = ""; // j'enlève les media du dom
      medias.sort(OrderByLikes);// je trie mes media selon l'options de trie séléctionner par l'utilisateur
      displayMediaData(medias, photographe);// on revois les media trier dans le DOM
    } else if (e.target.value === "Date") {
      document.querySelector(".media").innerHTML = ""; // j'enlève les media du dom
      medias.sort(OrderByDate);// je trie mes media selon l'options de trie séléctionner par l'utilisateur
      displayMediaData(medias, photographe);// on revois les media trier dans le DOM
    } else if (e.target.value === "Titre") {
      document.querySelector(".media").innerHTML = ""; // j'enlève les media du dom
      medias.sort(OrderByTitle);// je trie mes media selon l'options de trie séléctionner par l'utilisateur
      displayMediaData(medias, photographe);// on revois les media trier dans le DOM
    }
    else {
      alert("erreur : l'option de tri n'existe pas") // en cas d'erreur on en informe l'utilisateur
    }
  })

}

// Fonction qui gère l'affichage et l'incrémentation du nombre de likes
const likeshandler = () => {
  const likes = document.querySelectorAll(".media__like");
  likes.forEach((like) => {
    let liked = false
    like.addEventListener("click", (e) => {
      e.preventDefault();
      if (!liked) {
        liked = true
        totalLike++;
        const sumOfLikes = document.querySelector(".card__likes-value");
        sumOfLikes.textContent = parseInt(sumOfLikes.textContent) + 1;
        like.parentElement.querySelector(".media__count").textContent = parseInt(like.parentElement.querySelector(".media__count").textContent) + 1;
      } else {
        liked = false;
        totalLike--;
        const sumOfLikes = document.querySelector(".card__likes-value");
        sumOfLikes.textContent = parseInt(sumOfLikes.textContent) - 1;
        like.parentElement.querySelector(".media__count").textContent = parseInt(like.parentElement.querySelector(".media__count").textContent) - 1;
      }
    })


    like.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (!liked) {
          liked = true
          totalLike++;
          const sumOfLikes = document.querySelector(".card__likes-value");
          sumOfLikes.textContent = parseInt(sumOfLikes.textContent) + 1;
          like.parentElement.querySelector(".media__count").textContent = parseInt(like.parentElement.querySelector(".media__count").textContent) + 1;
        } else {
          liked = false;
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





