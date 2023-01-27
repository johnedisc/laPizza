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
  return prices.size[this.size] + (this.toppings.length * 1.30);
}

let pizza1 = new Pizza(['pepperoni'], 'med');
let pizza2 = new Pizza(['pepperoni','olive'], 'med');

console.log(pizza1.total(), pizza2.total());
