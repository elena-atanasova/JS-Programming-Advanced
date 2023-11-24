function solve(arr, rotations) {
    while (rotations > 0) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
        rotations--;
    }
    return arr.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));
console.log(solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15));