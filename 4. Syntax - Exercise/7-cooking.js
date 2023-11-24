function cooking(n, op1, op2, op3, op4, op5) {
    let number = n;
    let operations = [op1, op2, op3, op4, op5];

    for (let op of operations) {
        if (op === 'chop') {
            number /= 2;
        } else if (op === 'dice') {
            number = Math.sqrt(number);
        } else if (op === 'spice') {
            number += 1;
        } else if (op === 'bake') {
            number *= 3;
        } else if (op === 'fillet') {
            number *= 0.8;
            number = number.toFixed(1);
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');