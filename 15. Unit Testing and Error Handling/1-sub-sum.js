// error handling

// lecturer code
function sum(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    let subNumbers = numbers.slice(startIndex, endIndex + 1);

    let sum = subNumbers.reduce((a, x) => a + Number(x), 0);

    return sum;
}


module.exports = sum;

// function sum(nums, startIndex, endIndex) {
//     if (!Array.isArray(nums)) {
//         return NaN;
//     }

//     if (startIndex < 0) {
//         startIndex = 0;
//     }

//     if (endIndex >= nums.length) {
//         endIndex = nums.length - 1;
//     }

//     let isNumber = (x) => typeof x == 'number';
//     if (!nums.every(isNumber)) {
//         return NaN;
//     }

//     let range = nums.slice(startIndex, endIndex + 1);
//     let sum = range.reduce((acc, prev) => acc + prev, 0);

//     return sum;
// }

//let result = sum([10, 20, 30, 40, 50, 60], 3, 300);
//let result = sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
//let result = sum([10, 'twenty', 30, 40], 0, 2);
//let result = sum([], 1, 2);
let result = sum('text', 0, 2);
console.log(result);

module.exports = sum;


// function solve(array, startIndex, endIndex) {
//     if (Array.isArray(array) == false) {
//         return NaN;
//     }
//     if (startIndex < 0) { startIndex = 0; }
//     if (endIndex > array.length - 1) {
//         endIndex = array.length - 1;
//     }

//     return array
//         .slice(startIndex, endIndex + 1)
//         .map(Number)
//         .reduce((acc, x) => acc + x, 0);
// }
