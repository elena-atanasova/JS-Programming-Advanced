function words(input) {
    let pattern = /[A-Za-z0-9]+/g;
    let matches = input.match(pattern).map(el => el.toUpperCase());
    console.log(matches.join(', '));
}

words('Hi, how are you?');