function solve() {
   let addProductButtonElement = document.getElementsByClassName('add-product');
   
   Array.from(addProductButtonElement).forEach((el) => el.addEventListener('click', addToCart));

   let totalPrice = 0;
   let allProducts = [];

   let outputElement = document.getElementsByTagName('textarea')[0];
      
   function addToCart(e) {
      let parentElement = e.target.parentNode.parentNode;

      let productName = parentElement.getElementsByClassName('product-title')[0].textContent;
      let productPrice = parentElement.getElementsByClassName('product-line-price')[0].textContent;
      productPrice = Number(productPrice);

      let text = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

      outputElement.textContent += text;

      totalPrice += Number(productPrice);
      allProducts.push(productName);
   }

   let checkoutButtonElement = document.getElementsByClassName('checkout')[0];
   checkoutButtonElement.addEventListener('click', checkout);

   function checkout(e) {
      Array.from(addProductButtonElement).forEach((el) => el.disabled = true);

      let uniqueProducts = [...new Set(allProducts)];
      let jointProducts = uniqueProducts.join(', ');

      let output = `You bought ${jointProducts} for ${totalPrice.toFixed(2)}.`;

      outputElement.textContent += output;
      checkoutButtonElement.disabled = true;
   }
}