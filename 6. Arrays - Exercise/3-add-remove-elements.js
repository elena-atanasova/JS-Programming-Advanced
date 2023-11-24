function solve(commands) {
    let initialValue = 1;
    let result = [];
    for (let c of commands) {
        if (c === 'add') {
            result.push(initialValue);
        } else {
            result.pop();
        }
        initialValue++;
    }
    
    let output = result.length > 0 ? result.join('\n') : 'Empty';
    return output;
}

//console.log(solve(['add', 'add', 'add', 'add']));
//console.log(solve(['add', 'add', 'remove', 'add', 'add']));
console.log(solve(['remove', 'remove', 'remove']));