function solve(data) {
    let mapper = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return a / b;
        }
    }

    let list = []
    for (const el of data) {
        if (typeof el === 'number') {
            list.push(el);
        } else {
            let action = mapper[el];
            if (list.length >= 2) {
                let b = list.pop();
                let a = list.pop();
                list.push(action(a, b));
            } else {
                return 'Error: not enough operands!';
            }
        }
    }

    if (list.length > 1) {
        return 'Error: too many operands!';
    } else {
        return list[0];
    }
}

//solve([3, 4, '+']);
//solve([15, '/']);
//solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([31, 2, '+', 11, '/']);
solve([-1, 1, '+', 101, '*', 18, '+', 3, '/']);