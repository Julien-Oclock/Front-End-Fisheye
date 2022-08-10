import photographerDetailsTemplate from '../template/photographerDetails.js';

function photographerDetailsFactory(data) {

    // Injection des data dans le template
    const HTMLContent = photographerDetailsTemplate(data)

    // Display du template dans le DOM
    function getDataInDOM() {
        const DOMElement = document.createElement('div')
        DOMElement.className = 'photograph-container'
        DOMElement.innerHTML = HTMLContent
        return DOMElement
    }
    return { getDataInDOM }
}

export default photographerDetailsFactory;
