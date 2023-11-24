function solve(arr) {
    let result = [];
    arr.forEach((x, index) => {
        if (index % 2 != 0) {
            result.push(arr[index]);
        }
    });
    let doubledArr = result.map(x => x * 2);
    let reversed = doubledArr.reverse();
    
    return reversed.join(' ');
}

solve([10, 15, 20, 25]);