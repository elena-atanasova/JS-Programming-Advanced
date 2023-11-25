// function attachEventsListeners() {

//     let buttonElements = document.querySelectorAll('input[type="button"');

//     Array.from(buttonElements).forEach((el) => el.addEventListener('click', convert));

//     function convert(e) {
//         let parentElement = e.target.parentNode;
//         let buttonElement = parentElement.querySelector('input[type="button"]');

//         let textElement = parentElement.querySelector('input[type="text"]');
//         let input = textElement.value;

//         let daysElement = document.getElementById('days');
//         let hoursElement = document.getElementById('hours');
//         let minutesElement = document.getElementById('minutes');
//         let secondsElement = document.getElementById('seconds');

//         if (buttonElement.id == 'daysBtn') {
//             let days = input;
//             daysElement.value = 0;
//             hoursElement.value = days * 24;
//             minutesElement.value = days * 1440;
//             secondsElement.value = days * 86400;

//         } else if (buttonElement.id == 'hoursBtn') {
//             let hours = input;
//             daysElement.value = hours / 24;
//             hoursElement.value = 0;
//             minutesElement.value = hours * 60;
//             secondsElement.value = hours * 3600;

//         } else if (buttonElement.id == 'minutesBtn') {
//             let mins = input;
//             daysElement.value = mins / 1440;
//             hoursElement.value = mins / 60;
//             minutesElement.value = 0;
//             secondsElement.value = mins * 60;

//         } else if (buttonElement.id == 'secondsBtn') {
//             let seconds = input;
//             daysElement.value = seconds / 86400;
//             hoursElement.value = seconds / 3600;
//             minutesElement.value = seconds / 60;
//             secondsElement.value = 0;
//         }
//     }
// }


function attachEventsListeners() {
 
    let buttonElements = document.querySelectorAll('input[type="button"]');
 
    Array.from(buttonElements).forEach((el) => el.addEventListener('click', convert));
 
    function convert(e) {
 
        let type = e.target.parentElement.children[1].id;
        let value = Number(e.target.parentElement.children[1].value);
 
        let seconds = 0;
 
        switch (type) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }
 
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
 
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}