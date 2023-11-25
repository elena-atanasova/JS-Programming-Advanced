function create(words) {
   let allWords = words;
   let output = document.getElementById('content');

   allWords.forEach(el => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.style.display = 'none';
      pElement.textContent = el;
      divElement.appendChild(pElement);
      output.appendChild(divElement);
   });

   let divElements = document.querySelectorAll('div div');
   Array.from(divElements).forEach(el => {
      el.addEventListener('click', (e) => {
         let parentElement = e.target;
         let paragraphElement = parentElement.querySelector('div p');
         paragraphElement.style.display = '';
      });
   });
}