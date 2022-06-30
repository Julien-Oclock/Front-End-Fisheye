import photographerDetailsTemplate from '../template/photographerDetails.js';

function photographerDetailsFactory(data) {

    const HTMLContent = photographerDetailsTemplate(data)

    function getDataInDOM() {
        const DOMElement = document.createElement('div')
        DOMElement.className = 'photograph-container'
        DOMElement.innerHTML = HTMLContent
        return DOMElement
    }
    return { getDataInDOM }
}

export default photographerDetailsFactory;
