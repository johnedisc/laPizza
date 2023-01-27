// business

function Pizza(toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.total = function() {
  const prices = {
    size: {
      sm: 14.99,
      med: 17.99,
      lg: 22.99
    }
  }
  return prices.size[this.size];
}

let pizza1 = new Pizza([], 'lg');

console.log(pizza1.total());
