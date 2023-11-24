function solve(nums) {
    let sorted = nums.sort((a, b) => a - b);
    let result = [];
    while(sorted.length > 0) {
        let min = sorted.shift();
        let max = sorted.pop();

        result.push(min);
        result.push(max);
    }
    return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);