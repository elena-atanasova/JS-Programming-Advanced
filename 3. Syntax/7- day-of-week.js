function printDay(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let index = days.indexOf(day);

    let output = index != -1 ? index + 1 : 'error';
    return output;
}

let dayNumber = printDay('Monday');
console.log(dayNumber);