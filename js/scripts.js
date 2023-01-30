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
  let sizeCost = 0; 
  let topCost = 0;
  if (prices.size[this.size]) {
    sizeCost = prices.size[this.size];
  }
  return (sizeCost + (this.toppings.length * 1.30)).toFixed(2);
  
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

// ui
function buildPizza(e) {
  //e.preventDefault;
  let pizza = new Pizza();

  const sizesEl = document.querySelectorAll('div#size');
  const toppingsEl = document.querySelectorAll('.toppings');
  const totalEl = document.querySelector('.total');
  const buyEl = document.querySelector('.buy');
  console.log(sizesEl);
  console.log(toppingsEl);

  sizesEl.forEach(el => {
    el.addEventListener('click', (e) => {
      pizza.size = e.target.id;
      totalEl.innerText = pizza.total();
      console.log(e.target.id);
    });
  });

  toppingsEl.forEach(el => {
    el.addEventListener('click', (e) => {
      
      let target = e.target.id;
      if (!e.target.id) {
        target = e.target.children[0].id;
      }
        if (!pizza.toppings.includes(target)) {
          pizza.toppings.push(target);
          totalEl.innerText = pizza.total();
        }
      
    });
  });
  
  buyEl.addEventListener('click', (e) => {
    totalEl.innerText = '';
    buildPizza;
  });
  
}

window.addEventListener('load', buildPizza);
