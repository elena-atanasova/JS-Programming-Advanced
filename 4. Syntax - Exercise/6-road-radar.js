function roadRadar(speed, area) {
    let speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }

    if (speed <= speedLimits[area]) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        let diff = speed - speedLimits[area];
        let status = '';
        if (diff <= 20) {
            status = 'speeding';
        } else if (diff <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');