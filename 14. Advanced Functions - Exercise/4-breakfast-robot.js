// takes orders, keeps track of ingredients, outputs an error
function solution() {
    let nutrition = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipes = {
        apple: { 'carbohydrate': 1, 'flavour': 2, },
        lemonade: { 'carbohydrate': 10, 'flavour': 20, },
        burger: { 'carbohydrate': 5, 'fat': 7, 'flavour': 3, },
        eggs: { 'protein': 5, 'fat': 1, 'flavour': 1, },
        turkey: { 'protein': 10, 'carbohydrate': 10, 'fat': 10, 'flavour': 10, }
    }

    // Instructions - restock, prepare, report
    function cooking(str) {
        let [command, ...rest] = str.split(' ');

        if (command == 'restock') {
            let [microelement, quantity] = rest;
            nutrition[microelement] += Number(quantity);
            return 'Success';

        } else if (command == 'prepare') {
            let [recipe, quantity] = rest;
            let product = recipes[recipe];
            let entries = Object.entries(product);
            for (const [key, value] of entries) {
                let v = nutrition[key];
                if(nutrition[key] < quantity * value) {
                    return `Error: not enough ${key} in stock`;
                }
            }

            for (const [key, value] of entries) {
                nutrition[key] -= quantity * value;
            }
            
            return 'Success';

        } else if (command == 'report') {
            let output = '';
            for (const [key, value] of Object.entries(nutrition)) {
                output += `${key}=${value} `
            }
            return output.trimEnd();
        }
    }

    return cooking;
}

// let manager = solution (); 
// console.log (manager ("restock flavour 50")); // Success 
// console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));











