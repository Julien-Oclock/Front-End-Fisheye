
import photoTemplate from '../template/photo.js'

function photoFactory(data, photographer) {
    
        const HTMLContent = photoTemplate(data, photographer)
    
        function getMediaDOM() {
            const container = document.createElement('div')
            container.innerHTML = HTMLContent;
            return (container);
        }
        return { getMediaDOM }
}

export default photoFactory;