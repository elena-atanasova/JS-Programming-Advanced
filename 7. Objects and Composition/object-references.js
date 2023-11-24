// Object references
let cat = {
    name: 'Navcho',
    age: 7,
}

let otherCat = cat;     // copy by reference
otherCat.name = 'Garry';

// both objects point to the same address in memory, so the name of the original object is also changed
console.log(otherCat.name);
console.log(cat.name);


// First way to clone object
// Better ways exist!
let { ...clonedCat } = cat;
clonedCat.age = 3;
console.log(clonedCat.age);
console.log(cat.age);   // the age of the original cat is not changed
