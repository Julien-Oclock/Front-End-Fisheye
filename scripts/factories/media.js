
import photoTemplate from '../template/media.js'

function photoFactory(data, photographer) {

    // Injection des datas dans le template
    const HTMLContent = photoTemplate(data, photographer)

    // Display du template dans le DOM
    function getMediaDOM() {
        const container = document.createElement('div')
        container.innerHTML = HTMLContent;
        return (container);
    }
    return { getMediaDOM }
}

export default photoFactory;