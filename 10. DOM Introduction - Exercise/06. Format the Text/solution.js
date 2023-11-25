function solve() {
  let input = document.getElementById('input').value;
  let sentences = input.split('.').filter(x => x != '');
  let outputElement = document.getElementById('output');

  if (sentences.length <= 3) {
    let text = sentences.join('.');
    outputElement.innerHTML += `<p>${text}.</p>`;
  } else {
    while (sentences.length > 0) {
      let text = sentences.splice(0, 3) || sentences.splice(0, sentences.length);
      outputElement.innerHTML += `<p>${text}.</p>`;
    }
  }
}