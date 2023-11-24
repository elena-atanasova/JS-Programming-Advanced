function extract(content) {
    let text = document.getElementById(content).textContent;
    
    let pattern = new RegExp(/\((?<country>[^)]+)\)/, 'g');
    // \( being opening brace
    // (  start of subexpression
    // [^)]+  anything but closing parenthesis one or more times
    // ) — end of subexpression
    // \) — closing brace
    // The match() returns an array ["(my)","my"] from which the second element is extracted.
    
    let result = [];
    let textMatch;
    while((textMatch = pattern.exec(text)) !== null) {
        let country = textMatch.groups['country'];
        result.push(country);
    }
    
    return result.join('; ');
}