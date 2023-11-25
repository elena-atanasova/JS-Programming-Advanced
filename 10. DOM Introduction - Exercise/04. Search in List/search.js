function search() {
   let townElements = document.querySelectorAll('ul li');
   let towns = Array.from(townElements);

   let searchTextElement = document.getElementById('searchText');
   let searchText = searchTextElement.value;

   let regExp = new RegExp(searchText, 'g');
   let count = 0;

   // clear the results from the previous search
   towns.map(x => {
      x.style.fontWeight = 'normal';
      x.style.textDecoration = 'none';
   });

   towns.forEach(x => {
      if (x.textContent.match(regExp)) {
         x.style.fontWeight = 'bold';
         x.style.textDecoration = 'underline';
         count++;
      }
   });

   let resultElement = document.getElementById('result');
   resultElement.textContent = `${count} matches found`
}
