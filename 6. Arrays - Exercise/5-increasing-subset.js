function solve(arr) {
    let result = [];
    let firstElement = arr[0];
    
    arr.reduce((acc, curr) => {
        if ( acc <= curr) {
            result.push(curr);
            return curr;
        } else {
            return acc;
        }
    }, firstElement);
    return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15]);