// Finding an average with reduce
let numbersArr = [30, 50, 40, 10, 70];
let average = numbersArr.reduce((total, number, index, array) => {
	total += number;
	if (index === array.length - 1) {
		return total/array.length;
	} else {
		return total;
	}
});

console.log(average);   // 40