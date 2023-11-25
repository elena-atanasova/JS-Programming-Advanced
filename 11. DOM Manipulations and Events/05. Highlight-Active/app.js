function focused() {
    let inputElements = document.querySelectorAll('div div input');

    Array.from(inputElements).forEach((el) => {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused'
        })
        el.addEventListener('blur', (e) => {
            e.target.parentNode.className = ''
        })
    });
}