// function colorize() {
//     let rowElements = document.querySelectorAll('tr:nth-child(2n) td');
//     rowElements.forEach(x => {
//         x.style.backgroundColor = 'teal';
//     })
// }


// Second solution - judge acceptable
function colorize() {
    // Second solution
    let rowElements = document.getElementsByTagName('tr');

    // Convert to array
    let rows = Array.from(rowElements);

    rows.forEach((x, i) => {
        if (i % 2 != 0) {
            x.style.backgroundColor = 'teal';
        }
    });
}

//Third solution
// function colorizeRows() {
//     let rows = document.
//         querySelectorAll("table tr");
//     let index = 0;
//     for (let row of rows) {
//         index++;
//         if (index % 2 == 0)
//             row.style.background = "teal";
//     }
// }
