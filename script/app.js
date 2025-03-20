const shoppingList = [];

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
const ol = select('ol');

listen(document, 'DOMContentLoaded', displayItems);

function displayItems() {
    ol.innerHTML = ``
    shoppingList.forEach(createAListItem)
}

function createAListItem(Item) {
        const li = createAnElement("li");
        addText(li, Item);
        appendChild(ol, li);

listen(li, 'click', () => toggleChecked(li));
}


function toggleChecked(li) {
    
    
    li.classList.toggle("checked")
}

// const form = document.querySelector("form")
const form = select ('form')

listen(form, "submit", addItem)

function addItem(event) {
    event.preventDefault()

    shoppingList.push(event.target[0].value)

    displayItems();
    
    event.target.reset()
}

const deleteButton = select(".delete")

listen(deleteButton, 'click', clearList);

function clearList() {
    shoppingList.splice(0)

    displayItems();
}



