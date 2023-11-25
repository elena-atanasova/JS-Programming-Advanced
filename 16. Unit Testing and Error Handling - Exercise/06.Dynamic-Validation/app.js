function validate() {
    let inputElement = document.getElementById('email');
    let reg = /^([\w\-.]+)@([a-z]+)(\.[a-z]+)+$/;

    inputElement.addEventListener('change', () => {
        if (!inputElement.value.match(reg)) {
            inputElement.className = 'error';
        } else {
            inputElement.removeAttribute('class');
            inputElement.value = '';
        }
    });
}
