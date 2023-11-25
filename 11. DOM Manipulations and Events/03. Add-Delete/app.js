function addItem() {
    let itemsElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');

    // prevents from adding empty element
    if (inputElement.value.length == 0)  return;

    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;
    inputElement.value = '';

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    
    const deleteItem = () => {
        liElement.parentNode.removeChild(liElement);
    }
    deleteElement.addEventListener('click', deleteItem);

    liElement.appendChild(deleteElement);
    itemsElement.appendChild(liElement);
}