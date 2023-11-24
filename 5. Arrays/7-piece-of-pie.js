function solve(pieFlavours, firstFlavour, secondFlavour) {
    let startIndex = pieFlavours.indexOf(firstFlavour);
    let endIndex = pieFlavours.indexOf(secondFlavour);

    let finalArr = pieFlavours.slice(startIndex, endIndex + 1);
    console.log(finalArr);
}

solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'],
    'Pot Pie', 'Smoked Fish Pie');