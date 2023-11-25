function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');
    let resultElement = document.getElementById('result');

    const gradientMouseoverHandler = (e) => {
        let percent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
        resultElement.textContent = `${percent}%`;
    };
    
    gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
}


// Second solution
// function attachGradientEvents() {
//     let gradientElement = document.getElementById('gradient');
//     let resultElement = document.getElementById('result');

//     gradientElement.addEventListener('mousemove', gradientMouseoverHandler);
//     gradientElement.addEventListener('mouseout', gradientMouseoutHandler);

//     function gradientMouseoverHandler(event) {
//         console.log(event);
//         let percent = event.offsetX / (event.target.clientWidth - 1);
//         percent = Math.trunc(percent * 100);
//         resultElement.textContent = `${percent}%`;
//     }

//     function gradientMouseoutHandler(event) {
//         resultElement.textContent = "";
//     }
// }
