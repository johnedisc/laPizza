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

test: "Should return "Won't you be my neighbor?" if indexNumbr is 3"
code:
const num = 3;
numToKeyword(num);
expected Output: "Won't you be my neighbor?"

describe: negativeCheck() ==> createArr() ==> numToKeyword()

test: "giving positive number to negativeCheck() should return an array from createArr()"
code:
const num = 1;
negativeCheck(num);
expected Output: [0,1]

test: "giving positive number to negativeCheck() should return array with keywords inserted from numToKeyword()"
code:
const num = 3;
negativeCheck(num);
expected Output: [0,'beep!','boop!','won\'t you be my neighbor']

describe: checkName(name)

test: "should return 'hello' if user doesn't provide name"
code:
const name = '';
negativeCheck(name);
expected Output: hello

## license

feel free to get in touch at [christopher(dot)johnedis(at)gmail(dot)com](christopher.johnedis@gmail.com)

Copyright (c) 1.20.23 [johnedisc](https://johnedisc.github.io/portfolio/)
