// Multiline object literal
let person = {
    name: 'Pesho',
    age: 20,
    isMale: true,  // trailing comma is normal in JS; convenient when adding/ changing places of elements
};

// Single line object literal
let secondPerson = { name: 'Anna', age: 21, isFemale: true };

// Empty object literal and dynamic assignment of properties
let thirdPerson = {};
thirdPerson.name = 'Ivan';   // Dot notation
thirdPerson['hair-colour'] = 'brown';     // Bracket notation

let propName = 'age';
thirdPerson[propName] = '21';

// Access properties
console.log(person.name);
console.log(thirdPerson['name']);
console.log(thirdPerson['age']);
console.log(thirdPerson[propName]);

// Object Destructuring Assignment Syntax
let { age, name, ...rest } = person;     // the order of the variables doesn't matter, but the name should be the same
console.log(name);

// Renaming variable name in object destructuring
let { isMale: gender } = person;
console.log(gender);

