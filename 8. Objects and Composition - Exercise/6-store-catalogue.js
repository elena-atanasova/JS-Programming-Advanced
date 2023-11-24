function rectangle(input) {
    let catalogue = {};
    for (const line of input) {
        let [item, price] = line.split(' : ');
        price = Number(price);

        catalogue[item] = price;
    }

    let entries = Object.entries(catalogue);
    let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));
    
    let index = sorted[0][0][0];
    console.log(index);
    sorted.forEach(element => {
        if (element[0][0] != index) {
            index = element[0][0];
            console.log(index);
        }
        console.log(`  ${element[0]}: ${element[1]}`);
    });
}

rectangle(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);