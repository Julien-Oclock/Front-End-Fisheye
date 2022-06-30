export default function photo(data) {
    console.log(data)
    return (
        `
        <div>
            <img src="./assets/SamplePhotos/${photographer}/${data.media}" alt="">
            <div>
                <span>${data._title}</span>
                <span>
                    ${data.likes}
                    <i class="fa-solid fa-heart"></i>
                </span>
            </div>
        </div>
        `
    )
}