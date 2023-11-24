function solve(arr) {
    let result = [];
    arr.forEach((x, index) => {
        if (index % 2 == 0) {
            result.push(x);
        }
    });
    console.log(result.join(' '));
}

solve(['20', '30', '40', '50', '60']);