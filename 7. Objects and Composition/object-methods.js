let car = {
    model: 'BMW',
    year: 2010,
    facelift: true,
    honk: function() {  // Method with function expression
        console.log('Beep beep!');
    },
    honk2: () => {  // Method with arrow function
        console.log('Beep beep2!');
    },
    honk3() {   // Object method notation
        console.log('Beep beep3!');
    },
    honk4: function () {
        console.log('Beep beep4!');
    },
    honk5   // same as honk5: honk5
}

function honk5() {
    console.log('Beep beep5!');
}

car.honk();
car.honk5();