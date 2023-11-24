function rectangle(obj) {
    let product = {};
    let engines = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 },
    };

    product.model = obj.model;
    if (obj.power <= 90) {
        product.engine = engines['Small engine'];
    } else if (obj.power <= 120) {
        product.engine = engines['Normal engine'];
    } else if (obj.power <= 200) {
        product.engine = engines['Monster engine'];
    }

    product.carriage = {};
    product.carriage.type = obj.carriage;
    product.carriage.color = obj.color;

    if (obj.wheelsize % 2 == 0) {
        obj.wheelsize = obj.wheelsize - 1;
    }

    let wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    product.wheels = wheels;

    return product;
}

let s = rectangle({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});
console.log(s);
