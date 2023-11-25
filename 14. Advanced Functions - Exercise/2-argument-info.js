function printInfo(...args) {
    let types = {};
    args.forEach(x => {
        console.log(`${typeof x}: ${x}`);

        if (!types.hasOwnProperty(typeof x)) {
            types[typeof x] = 1;
        } else {
            types[typeof x]++;
        }
    });

    let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
    
    for (const [key, value] of sorted) {
        console.log(`${key} = ${value}`);
    }
}

//printInfo('cat', 42, function () { console.log('Hello world!'); }, 'dog');
printInfo({ name: 'bob'}, 3.333, 9.999);