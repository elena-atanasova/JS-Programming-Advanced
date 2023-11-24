// function extractText() {
//     let listElements = document.querySelectorAll('ul li');
//     let resultElement = document.getElementById('result');

//     listElements.forEach(x => {
//         resultElement.textContent += x.textContent;
//         resultElement.textContent += '\n';
//     })
//     resultElement.textContent = resultElement.textContent.trim();
// }


// Second solution - compatible with Judge
function extractText() {
    let listElements = document.querySelectorAll('ul li');
    let resultElement = document.getElementById('result');

    for (const el of listElements) {
        resultElement.textContent += el.textContent;
        resultElement.textContent += '\n';
    }
    resultElement.textContent = resultElement.textContent.trim();
}

// Third solution
// function extractText() {
//     let ulElement = document.getElementById('items');

//     let textareaElement = document.getElementById('result');
//     textareaElement.textContent = ulElement.textContent;
// }

// Forth solution
// function extractText() {
//     let itemNodes = document.querySelectorAll("ul#items li");
//     let textarea = document.querySelector("#result");
//     for (let node of itemNodes) {
//       textarea.value += node.textContent + "\n";
//     }
//   }
  