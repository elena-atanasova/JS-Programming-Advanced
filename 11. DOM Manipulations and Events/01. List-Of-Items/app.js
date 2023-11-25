// function addItem() {
//     let inputElement = document.getElementById('newItemText');
//     let liElements = document.getElementById('items');
    
//     let liElement = document.createElement('li');
//     liElement.textContent = inputElement.value;
//     liElements.appendChild(liElement);

//     // clearing the input
//     inputElement.value = '';
// }

function addItem() {
    let inputElement = document.getElementById("newItemText");
    let itemsElement = document.getElementById("items");

    let liElement = document.createElement("li");
    liElement.textContent = inputElement.value;

    itemsElement.appendChild(liElement);

    // clearing the input
    inputElement.value = '';
}