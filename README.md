# [laPizza](https://johnedisc.github.io/laPizza/)

#### by [johnedisc](https://johnedisc.github.io/portfolio/)

#### an excercise constructing, accessing, and printing objects to the DOM

## technologies used

* html
* css
* javascript

## description

* site uses CSS grid to layout pizza sizes and toppings which do not allow more than one size or to add a toppoing twice. it also uses a fixed header which i had been wanting to experiment with. the totaling and toppings choices are all accomplished using objects and arrays.

## setup/installation requirements

* visit the site [here](https://johnedisc.github.io/laPizza/)
* clone down the [repository from github]() inside the directory of your choosing
```bash
git clone 
```
* open index.html in your favorite browser
* browse as you would any website

## known Bugs

* does not currently show you what toppings you have choosen

## testing and layout

describe: Pizza(toppings, size)

test: "should return object with two properties. one array with toppings and a size property"
code:
let pizza1 = new Pizza(['olive','grnPep'], 'small');
expected Output: Pizza { toppings: ['olive','grnPep'], size: 'small' }

describe: Pizza.prototype.total()

test: "should return 14.99 if pizza is small"
code:
let pizza1 = new Pizza([], 'sm');
pizza1.total()
expected Output: 14.99

test: "should return 17.99 for med and 22.99 if pizza is large"
code:
let pizza1 = new Pizza([], 'med');
let pizza1 = new Pizza([], 'lg');
pizza1.total()
expected Output: 17.99, 22.99

test: "should return 1.30 more for every topping added"
code:
let pizza1 = new Pizza(['pepperoni'], 'med');
let pizza1 = new Pizza(['pepperoni','olive'], 'med');
pizza1.total()
expected Output: 19.29, 20.59

## license

feel free to get in touch at [christopher(dot)johnedis(at)gmail(dot)com](christopher.johnedis@gmail.com)

Copyright (c) 1.20.23 [johnedisc](https://johnedisc.github.io/portfolio/)
