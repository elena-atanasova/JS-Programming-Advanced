function rectangle(input) {
    let result = [];
    let columnNames = input.shift();

    for (let line of input) {
        line = ' ' + line + ' ';
        let temp = line.split(' | ').filter(x => x != '');
        let [town, latitude, longitude] = temp;
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        latitude = Number(latitude);
        longitude = Number(longitude);
        let obj = {
            "Town": town,
            "Latitude": latitude,
            "Longitude": longitude
        }
        result.push(obj);
    }
    return JSON.stringify(result);
}

let s = rectangle(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']);

console.log(s);