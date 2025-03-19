const shoppingList = ['Managu', 'Mrenda', 'Matumbo'];
// Utility functions for DOM manipulation
function createAnElement(li) {
   return document.createElement(li)
}

function addText(element, text) {
    return (element.innerTExt = text)
}

function appendChild(parentElement, childElement) {
    return parentElement.appendChild(childElement)
}

function select(selector) {
    return document.querySelector
}

function listen(element, event, callback) {
    return element.addEventListener(event, callback)
}

function addAttribute(element, attribute, content) {
    return element.setAttribute(attribute, content)
}
document.addEventListener("DOMContentLoaded", displayItems)
listen(document, 'DOMContentLoaded', displayItems)

const ol = document.querySelector("ol")

function displayItems() {
    shoppingList.forEach((item) =>{
        const li = createAnElement("li")
        li.setAttribute("class", "yho")
        addText(li, item)
        appendChild(ol, li)
     })
}