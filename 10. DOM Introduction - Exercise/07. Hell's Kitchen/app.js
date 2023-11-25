function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('textarea').value;
      input = JSON.parse(input);
      
      let restaurants = createRestaurantObj(input);
      let averageSalaries = calcAverageSalary(restaurants);
      let bestRestaurant = findBestRestaurant(averageSalaries);

      let [name, avgSalary] = bestRestaurant;
      let allSalaries = restaurants[bestRestaurant[0]]
      let sortedSalaries = Object.entries(allSalaries).sort((a, b) => b[1] - a[1]);

      let highestSalary = sortedSalaries[0][1];
      
      let outputElement = document.querySelector('#bestRestaurant p');
      outputElement.textContent = `Name: ${name} Average Salary: ${avgSalary.toFixed(2)} Best Salary: ${highestSalary.toFixed(2)}`;
      
      let workersElement = document.querySelector('#workers p');
      sortedSalaries.forEach(x => {
         workersElement.textContent += `Name: ${x[0]} With Salary: ${x[1]} `;
      });
   }

   function createRestaurantObj(array) {
      let obj = {};

      for (const el of array) {
         let [restaurant, rest] = el.split(' - ');
         let workers = rest.split(', ');

         if (!obj.hasOwnProperty(restaurant)) {
            obj[restaurant] = {};
         }

         for (const w of workers) {
            let [name, salary] = w.split(' ');
            salary = Number(salary);
            obj[restaurant][name] = salary;
         }
      }

      return obj;
   }

   function calcAverageSalary(object) {
      let averageSalariesPerRestaurant = {};

      let entries = Object.entries(object);
      for (const [key, value] of entries) {
         let salaries = Object.values(value);
         let sum = salaries.reduce((acc, curr) => acc + curr, 0);
         let averageSalary = (sum / salaries.length).toFixed(2);

         averageSalariesPerRestaurant[key] = Number(averageSalary);
      }

      return averageSalariesPerRestaurant;
   }

   function findBestRestaurant(object) {
      let sorted = Object.entries(object).sort((a, b) => b[1] - a[1]);

      let bestRestaurant = sorted[0];
      return bestRestaurant;
   }
}