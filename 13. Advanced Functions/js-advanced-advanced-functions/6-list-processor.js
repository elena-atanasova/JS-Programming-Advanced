function solve(input) {
    let result = [];

    const functions = {
        add(args1) {
            result.push(args1);
        },
        remove(arr, str) {
            let index = arr.indexOf(str);
            if (index !== -1) {
                arr.splice(index, 1);
            }
        },
        print() {
            console.log(result.join(','));
        }
    }

    for (const el of input) {
        let [method, str] = el.split(' ');
        if (method === 'add') {
            functions['add'](str);
        } else if (method === 'remove') {
            functions['remove'](result, str);
        } else if (method === 'print') {
            functions['print']();
        }
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);