
export default function photo(data, photographe) {
    const firstName = photographe.name.split(' ')[0];
    return (
        `
        <div class="media__container medias">
        ${data.image ?
            `<img class="media__item medias" src="./assets/SamplePhotos/${firstName}/${data.image}" alt="${data._title}" tabindex="0">` :
            `<video class="media__item medias" controls  width="250 "src="./assets/SamplePhotos/${firstName}/${data.video}" type="video/mp4" tabindex="0"       ></video>
        `}
            <div class="media__info">
                <span class="media__title">${data._title}</span>
                <div class="media__likes">
                    <span class="media__count">${data.likes}</span>
                    <img src="./assets/icons/heart.svg" alt="like" class="media__like" tabindex="0">
                </div>
            </div>
        </div>
        `
    )
}