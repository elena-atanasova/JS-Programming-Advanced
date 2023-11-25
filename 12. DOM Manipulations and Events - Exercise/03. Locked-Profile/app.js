// function lockedProfile() {
//     let profileElements = document.getElementsByClassName("profile");

//     for (const profile of profileElements) {
//        let showMoreButtonElement = profile.querySelector("div button");
//        let lockedElement = profile.querySelector("input[value=lock]");
//        let unlockedElement = profile.querySelector("input[value=unlock]");
//        let hiddenInfoElement = profile.querySelector("div div");
//        //let labelElement = hiddenInfoElement.querySelectorAll("label");

//         showMoreButtonElement.addEventListener("click", show);

//         function show(e) {
//             if (lockedElement.checked) {
//                 console.log(lockedElement);
//             } else {
//                 let inputElements = hiddenInfoElement.querySelectorAll("input");
//                 inputElements[0].style.display = 'inline-block';
//                 console.log(inputElements[0].value);
//                 //console.log(hiddenInfoElement.textContent);
//                 //console.log(hiddenInfoElement);
//                 //console.log(labelElement[0].textContent);
//             }
            
//         }
        
//     }
    
// }

function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}