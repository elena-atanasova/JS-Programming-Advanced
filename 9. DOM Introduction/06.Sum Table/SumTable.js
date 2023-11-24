function sumTable() {
    let tableElements = document.querySelectorAll('tr td:nth-child(2)');
    let numbers = Array.from(tableElements).map(x => Number(x.textContent));
    numbers.pop();

    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}