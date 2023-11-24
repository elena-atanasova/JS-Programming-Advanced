function rectangle(input) {
    let registry = {};

    for (let line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (!registry[town]) {
            registry[town] = 0;
        }
        registry[town] += population;
    }
    
    Object.keys(registry).forEach(x => {
        console.log(`${x} : ${registry[x]}`);
    });
}

rectangle(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);