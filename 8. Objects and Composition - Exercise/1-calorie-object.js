function rectangle(arr) {
    let products = {};
    arr.forEach((x, index) => {
        if (index % 2 == 0) {
            let key = arr[index];
            products[key] = Number(arr[index + 1]);
        }
    });

    return products;
}

const obj = rectangle(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log(obj);