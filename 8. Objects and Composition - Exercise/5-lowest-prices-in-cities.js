function rectangle(input) {
    let products = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(product)) {
            products[product] = {};
            products[product].price = price;
            products[product].town = town;
        } else {
            if (price < products[product].price) {
                products[product].price = price;
                products[product].town = town;
            }
        }
    }

    for (const k of Object.keys(products)) {
        console.log(`${k} -> ${products[k].price} (${products[k].town})`);
    }
}

rectangle(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);