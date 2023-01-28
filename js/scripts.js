// business

function Pizza() {
  this.toppings = [];
  this.size = '';
}

Pizza.prototype.total = function() {
  const prices = {
    size: {
      sm: 14.99,
      med: 17.99,
      lg: 22.99
    }
  }
  const sizeCost = 0; 
  const topCost = 0;
  if (prices.size[this.size]) {
    sizeCost = prices.size[this.size];
  }
  return sizeCost + (this.toppings.length * 1.30);
  
}

Pizza.prototype.addTopping(topping) = function() {
  this.toppings.push(topping);
}

// ui
function buildPizza(e) {
  //e.preventDefault;
  console.log('dsflkj');
  let pizza = new Pizza();

  console.log(pizza);

  document.querySelector('div#size>*').addEventListener('click', (e) => {
    console.log(event.target.id);
     
  });
  
}

window.addEventListener('load', buildPizza);
