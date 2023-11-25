function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  let result = [];
  text = text.split(' ').map(x => x.toLowerCase());
  if (namingConvention == 'Camel Case') {
    text.forEach((x, i) => {
      x = i == 0 ? x : x[0].toUpperCase() + x.slice(1);
      result.push(x);
    });
  } else if (namingConvention == 'Pascal Case') {
    text.forEach((x, i) => {
      x = x[0].toUpperCase() + x.slice(1);
      result.push(x);
    });
  } else {
    result.push('Error!');
  }

  let resultElement = document.getElementById('result');
  resultElement.textContent = result.join('');
}