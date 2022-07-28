
export default function photo(data, photographe) {
    const firstName = photographe.name.split(' ')[0];
    return (
        `
        <div class="media__container medias">
        ${data.image ?
            `<img class="media__item medias" src="./assets/SamplePhotos/${firstName}/${data.image}" alt="${data._title}">` :
            `<video class="media__item medias" controls  width="250 "src="./assets/SamplePhotos/${firstName}/${data.video}" type="video/mp4"></video>
        `}
            <div class="media__info">
                <span class="media__title">${data._title}</span>
                <span class="media__likes">
                    ${data.likes}
                    <img src="./assets/icons/heart.svg" alt="like" class="media__like">
                </span>
            </div>
        </div>
        `
    )
}