function solve(arr, step) {
    let output = [];
    for (let i = 0; i < arr.length; i = i + step) {
        output.push(arr[i]);
    }
    return output;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));