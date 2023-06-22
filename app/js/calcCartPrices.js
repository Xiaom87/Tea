function calcCartPrices() {
   const cartItems = document.querySelectorAll('.cart-item');

   const totalPriceEl = document.querySelector('.cart-wrapper');
  
   let Pricetotal = 0;

   cartItems.forEach(function(item) {
      
     const amountEl = item.querySelector('[data-counter]');
     const priceEl = item.querySelector('.price__currency');
     const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
     Pricetotal += currentPrice;
   });

   
  

}