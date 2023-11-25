function toggle() {
    let extraElement = document.getElementById('extra');
    let buttonElement = document.getElementsByClassName('button')[0];

    if (buttonElement.textContent == 'More') {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}