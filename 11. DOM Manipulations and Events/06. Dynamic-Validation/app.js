function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (e) => {
        let pattern = new RegExp('[a-z]+\@[a-z]+\.[a-z]+', 'g');
        if (!e.target.value.match(pattern)) {
            e.target.setAttribute('class', 'error');
        } else {
            e.target.setAttribute('class', '');
        }
    });
}