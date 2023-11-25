function deleteByEmail() {
    let inputElement = document.querySelector('input[name="email"]');
    let emailCellElements = document.querySelectorAll('#customers tr td:nth-child(2)');
    let resultElement = document.getElementById('result');
    
    let emailElements = Array.from(emailCellElements);
    emailElements.forEach(x => {
        if (inputElement.value == x.textContent) {
            x.parentNode.remove();
            resultElement.textContent = 'Deleted';
            return;
        }
        resultElement.textContent = 'Not found.';
    })
    
    inputElement.value = '';
}


// Second Solution
// function deleteByEmail() {
//     let inputElement = document.querySelector('input[name="email"]');
//     let emailCellElements = document.querySelectorAll('#customers tr td:nth-child(2)');
//     let resultElement = document.getElementById('result');
    
//     let emailElements = Array.from(emailCellElements);
//     let targetElement = emailElements.find(x => x.textContent == inputElement.value);

//     inputElement.value = '';

//     if (targetElement) {
//         targetElement.parentNode.remove();
//         resultElement.textContent = 'Deleted.';
//         return;
//     }
//     resultElement.textContent = 'Not found.';
// }


