function createRegister(cars) {
    const register = {};
    const order = [];

    for (const item of cars) {
        const car = item.split(' | ');
        const brand = car[0];
        const model = car[1];
        const produced = Number(car[2]);

        if (!order.includes(brand)) {
            order.push(brand);
            register[brand] = new Map();
        }

        if (!register[brand].has(model)) {
            register[brand].set(model, produced);
        } else {
            const amount = register[brand].get(model);
            register[brand].set(model, amount + produced);
        }
    }

    for (const brand of order) {
        console.log(brand);
        for (const model of register[brand]) {
            const name = model[0];
            const amount = model[1];
            console.log(`###${name} -> ${amount}`);
        }
    }
}

createRegister(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);