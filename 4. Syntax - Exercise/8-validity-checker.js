function check(x1, y1, x2, y2) {
    let first = calculateDistance(x1, y1, 0, 0) % 1 == 0 ? 'valid' : 'invalid';
    let second = calculateDistance(x2, y2, 0, 0) % 1 == 0 ? 'valid' : 'invalid';
    let third = calculateDistance(x1, y1, x2, y2) % 1 == 0 ? 'valid' : 'invalid';

    console.log(`{${x1}, ${y1}} to {0, 0} is ${first}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${second}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${third}`);
    
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
    }
}

check(3, 0, 0, 4);
