
// DOM ELEMENT
const lightbox = document.querySelector(".lightbox");
const header = document.querySelector(".photograph-header");
const imageContainer = document.querySelector(".lightbox__container");
const nextBtn = document.querySelector(".lightbox__next");
const prevBtn = document.querySelector(".lightbox__prev");
const closeBtn = document.querySelector(".lightbox__close");



const displayLigthbox = (src, alt) => {
    header.setAttribute("aria-hidden", true);
    main.setAttribute("aria-hidden", true);
    lightbox.setAttribute("aria-hidden", false);
    lightbox.style.display = "block";
    console.log(src.split('.').pop() === "mp4")
    if (src.split('.').pop() === "mp4") {
        imageContainer.innerHTML = `
        <video autoplay muted loop controls src="${src}" type="video/mp4" alt="${alt}">
        </video>`;
    } else {
        imageContainer.innerHTML = `<img src="${src}" alt="${alt}">`;
    }
}

const closeLightbox = () => {
    header.setAttribute("aria-hidden", false);
    main.setAttribute("aria-hidden", false);
    lightbox.setAttribute("aria-hidden", true);
    lightbox.style.display = "none";
    document.getElementById("contact").focus();
}

const openLightbox = (e) => {
    const src = e.target.getAttribute("src");
    const alt = e.target.getAttribute("alt");
    console.log(src);
    displayLigthbox(src, alt);
}

const nextImage = () => {
    const currentImage = document.querySelector(".lightbox__container img") || document.querySelector(".lightbox__container video");
    const currentImageSrc = currentImage.getAttribute("src");
    const images = Array.from(document.querySelectorAll(".media__item"));
    console.log(images);
    const imageCount = images.length;
    let imageIndex = 0;

    for (let i = 0; i < imageCount; i++) {
        if (images[i].getAttribute("src") === currentImageSrc) {
            imageIndex = i;

        }
    }

    if (imageIndex === imageCount - 1) {
        imageIndex = 0;
    } else {
        imageIndex++;
    }
    console.log("imageIndex après traitement: ", imageIndex);
    displayLigthbox(images[imageIndex].getAttribute("src"), images[imageIndex].getAttribute("alt"));
}

const prevImage = () => {
    const currentImage = document.querySelector(".lightbox__container img") || document.querySelector(".lightbox__container video");
    const currentImageSrc = currentImage.getAttribute("src");
    const images = Array.from(document.querySelectorAll(".media__item"));
    console.log(images);
    const imageCount = images.length;
    let imageIndex = 0;

    for (let i = 0; i < imageCount; i++) {
        if (images[i].getAttribute("src") === currentImageSrc) {
            imageIndex = i;

        }
    }
    if (imageIndex === 0) {
        imageIndex = imageCount - 1;
    } else {
        imageIndex--;
    }
    console.log("imageIndex après traitement: ", imageIndex);
    displayLigthbox(images[imageIndex].getAttribute("src"), images[imageIndex].getAttribute("alt"));
}


// EXÉCUTION D'UN SET TIMEOUT DE 500ms (POUR ETRE SUR QUE TOUTE LA PAGE EST BIEN CHARGÉ) POUR L'OUVERTURE DE LA LIGHTBOX QUAND ON CLIQUE SUR UNE IMAGE
setTimeout(() => {
    const images = document.querySelectorAll(".media__item");
    images.forEach(image => {
        image.addEventListener("click", openLightbox);
        image.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                openLightbox(e);
            }
        })
    }
    )
}, 500)

window.addEventListener("keydown", (e) => {
    if (
        lightbox.getAttribute("aria-hidden") == "false"
    ) {
        e.preventDefault();
        switch (e.key) {
            case "ArrowRight":
                nextImage();
                break;
            case "ArrowLeft":
                prevImage();
                break;
            case "Escape":
                closeLightbox();
                break;

            default:
                return;
        }
    }
});