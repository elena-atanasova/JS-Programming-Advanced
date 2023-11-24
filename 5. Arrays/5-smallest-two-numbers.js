function solve(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let smallestNumbers = sortedArr.slice(0, 2);
    console.log(smallestNumbers.join(' '));
}

solve([30, 15, 50, 5]);