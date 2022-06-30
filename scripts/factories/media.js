
import photoTemplate from '../template/photo.js'

function photoFactory(data) {
    
        const HTMLContent = photoTemplate(data)
    
        function getMediaDOM() {
            const container = document.createElement('div')
            container.innerHTML = HTMLContent;
            return (container);
        }
        return { getMediaDOM }
}

export default photoFactory;