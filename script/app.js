const shoppingList = ['Managu', 'Mrenda', 'Matumbo'];

// Utility functions for DOM manipulation
function createAnElement(element) {
    return document.createElement(element)
}

function addText(element, text) {
    return (element.textContent = text);
}

function appendChild(parentElement, childElement) {
    return parentElement.appendChild(childElement)
}

function select(selector) {
    return document.querySelector(selector)
}

function listen(element, event, callback) {
    return element.addEventListener(event, callback)
}

function addAttribute(element, attribute, content) {
    return element.setAttribute(attribute, content)
}

listen(document, 'DOMContentLoaded', displayItems);


const ol = select('ol');

function displayItems() {
    shoppingList.forEach((Item) => {
        const li = createAnElement("li");
        addText(li, Item)
        appendChild(ol, li);
    })
}