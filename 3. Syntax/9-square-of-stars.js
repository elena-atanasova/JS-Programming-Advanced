function print(num = 5) {
    let row = '* '.repeat(num).trim();
    let square = [];

    for (let i = 0; i < num; i++) {
        square.push(row)
    }
    
    square.forEach(x => console.log(x));
}

print(3);