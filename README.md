# lapizza

#### by [johnedisc](https://johnedisc.github.io/portfolio/)

#### an excercise constructing, accessing, and printing objects to the DOM

## technologies used

* html
* css
* javascript

## description

*

## setup/installation requirements

* visit the site [here]()
* clone down the [repository from github]() inside the directory of your choosing
```bash
git clone 
```
* open index.html in your favorite browser
* browse as you would any website

## known Bugs

*

## tech learned in making the site

* vim: use 
```bash
:[range]s/char/char replace/g

# for example to select lines 1-10, globally

:1,10s/char/new char/g
``` 
to select the lines for your substitute (search and replace). with no 'g' flag, this will only return the first result on a line.

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
