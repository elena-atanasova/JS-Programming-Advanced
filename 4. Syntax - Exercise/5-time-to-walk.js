function solve(steps, footprintLength, speed) {
    let distanceMeters = steps * footprintLength;
    let distanceKM = distanceMeters / 1000;
    let breaksHours = Math.floor(distanceMeters / 500) / 60;

    let time = distanceKM / speed;
    let totalTime = time + breaksHours;

    let secTotal = totalTime * 3600;

    let h = Math.floor(secTotal / 3600);
    let mins = Math.floor(secTotal / 60);
    let sec = Math.round(((secTotal / 60) % 1) * 60);

    console.log((h < 10 ? '0' : '') + h + ':' + (mins < 10 ? '0' : '') + mins + ':' + (sec < 10 ? '0' : '') + sec);
}

solve(2564, 0.70, 5.5);