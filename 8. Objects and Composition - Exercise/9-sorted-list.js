function createSortedList() {
    let numbers = [];
    let operations = {
        add(n) {
            if (typeof(n) == 'number') {
                numbers.push(n);
                sortList(numbers);
            }
        },
        remove(index) {
            if (index >= 0 && index < numbers.length) {
                numbers.splice(index, 1);
                sortList(numbers);
            }
        },
        get(index) {
            if (index >= 0 && index < numbers.length) {
                return numbers[index];
            }
        },
        get size() {
            return numbers.length;
        }
    };

    function sortList(array) {
        return array.sort((a, b) => a - b);
    }

    return operations;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);