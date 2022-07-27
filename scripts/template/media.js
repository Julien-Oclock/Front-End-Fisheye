
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
                    <i class="fa-solid fa-heart"></i>
                </span>
            </div>
        </div>
        `
    )
}