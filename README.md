# JavaScript Exercises Day 1

Some of those exercises can seem very basic, but the idea is, to get you comfortable using JavaScript syntax, before we dive into more challenging code assignments.

## 1)

**Find the answer below by browsing through the internet.**

1. Which are the JavaScript Data Types? ( there are 6)
2. What are undeclared and undefined variables?
3. Which symbol is used for comments in Javascript? (single line, multi line)
4. Does JavaScript support automatic type conversion?
5. What is the ‘Strict’ mode in JavaScript and how can it be enabled?
6. What is the difference between a object oriented programming language and a functional programming language?
7. What is the difference between imperative and declarative programming?
8. Which imperative or declarative programming languages do you know?
9. Explain what a pure-function and a higher-order-function is?
10. Explain server-side vs client-side code.

## 2)

**JavaScript has a lot of embedded libraries, just like JAVA. Click on link below and have a look if you can recognize some of the functions you have already used in JAVA. If you have done that, use four of the JS `Math` functions that can:**

### Link

- [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

1. print out a random number from 1 to 10.
2. add 2 numbers and then show the result to the console.
3. if given a float number, the math function should round the number up
4. if given a float number, the function should round the number down

## 3)

**Let's get familiar with JS String manipulations**

### Links

- [JS String reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JS String lierals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Exercises

1. create three string variables.
   1. `var cph = Copenhagen`
   2. `var bis = Business`
   3. `var aca = Academy`
2. concatenate those variables into a new variable called `cba`, using JS String template literals. `Hint: You have to use backticks`.
3. make `cba` to upper case
4. make `cba` to lower case
5. replace the word `Copenhagen` with the word `Lyngby`
6. only print four letters of the word `Copenhagen`, so you get the word `open`.
7. split `cba` in three parts, so you end up with an array of length 3.

## 4)

**The Conditional (Ternary) Operator**

### Link

- [JS Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Exercise

1. create a new variable called `age` and initial the variable with a number. (eks. your age)
2. create a ternary operator that can print two statements to the console. In case `age` is more or equal then 18, it should print `I'm aloud to drive a car!`, but if the number is lower, it will print `I'am to young to drive!`.

## 5)

**This exercise is meant to introduce you to the JavaScript array and the functionality it offers. Whenever you encounter a new language the very first thing you usually should focus on is its collection framework. All questions can be answered with one-liners, so the main task is to figure out which method to use (hints are given for each question).**

### Link

- [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Exercises

</br>

```JS
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
```

</br>

1. Create a new array called **all**, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls. To do this use a method called concat() to merge two or more arrays together. (alternative is shown below by using the spread operator)

2. The array type has a method to **reduce** an array into a single string **join()**.

   1. Create a comma-separated string containing all the names from the all-array, separated by commas.
   2. Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.

3. Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)

   - Hint: **push(..)**

4. Add the names, Hans and Kurt, to the start of the array (alternative is shown below by using the spread operator)

   - Hint: **unshift()**

5. Remove the first name in the array

   - Hint: **shift()**

6. Remove the last name from the array

   - Hint: **pop(..)**

7. Remove Ole and Janne from the middle of the array

   1. Hint: **splice(..)**

8. Sanne thinks it’s unfair that the boys have to come first, reverse the array, so that the girls comes first.

   - Hint: **reverse()**

9. Peter thinks that this is just as unfair and suggests that the array should be sorted. Sort the array.

   - Hint: **sort()**

10. The default sort algorithm doesn’t handle the situation where the names are either capitalized or not. Write a user-defined sort method to fix this problem.

</br>

### Alternative to concat()

Today you would use the **spread operator** as demonstrated below:

### Link

- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```
let all = [...boys, ...girls];
output: [ 'Peter', 'lars', 'Ole', 'Janne', 'hanne', 'Sanne' ]

[...girls,  “Lone”, “Gitte”]
output: [ 'Janne', 'hanne', 'Sanne', 'Lone', 'Gitte' ]

[“Hans”, “Kurt”, … boys]
output: [ 'Hans', 'Kurt', 'Peter', 'lars', 'Ole' ]
```

## 6)

### JS functions and callbacks

**Functions** are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it from.

A **callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```JS
// function declaration
function addDecl(a, b) {
  return a + b;
}

// function expression
const addExpr = function (a, b) {
  return a + b;
};

// arrow function
const addArrow = (a, b) => a + b;

// anonymous function
const createMultiplier = function (a) {
  return (b) => a * b; // <= anonymous function
};

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(4)); // 8
console.log(triple(4)); // 12

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("I am a self invoked function!");
})();
```

```JS
// callback example
function filter(numbers, callback) {
  let results = [];
  for (const number of numbers) {
    if (callback(number)) {
      results.push(number);
    }
  }
  return results;
}

let numbers = [1, 2, 4, 7, 3, 5, 6];

let oddNumbers = filter(numbers, function (number) {
  return number % 2 != 0;
});

console.log(oddNumbers);
```

### Exercises

1. Copy the code below in a js file and call one console.log at a time. It’s not about doing it as fast as you can, but about understanding what's happening, so make sure you understand each line.

2. Write a `mul(n1, n2)` function (inspired by add and sub) and use it as the callback for the cb function.

3. Call `cb()`, this time with an anonymous function that divides the first argument with the second.

```JS
// Function Declaration
function add(n1, n2) {
  return n1 + n2;
}

// Function Expression
var sub = function (n1, n2) {
  return n1 - n2;
};

// Callback example
var cb = function (n1, n2, callback) {
  return `Result from the two numbers: ${n1} and ${n2} = ${callback(n1, n2)}`;
};

// 1- What will this print?
console.log(add(1, 2));

// 2- What will it print and what does add represent?
// console.log(add("hund"))

// 3- What will it print
// console.log(add(1,2,3));

// 4- What will it print
// console.log(add(1));

// 5- What will it print
// console.log(cb(3,3,add));

// 6- What will it print
// console.log(cb(4,3,sub));

// 7- What will it print and what was the problem?
// console.log(cb(3,3,add()));

// 8- What will it print
// console.log(cb(3,"hh",add));
```

## 7)

### Error handling

### Link

- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

```JS
var cb = function (n1, n2, callback) {
  return `Result from the two numbers: ${n1} and ${n2} = ${callback(n1, n2)}`;
};

console.log(cb(3, 3, add()));
```

The above function call will fail due to missing/wrong arguments. But it will fail at runtime, and not as with Java, at compile time. We can check arguments in JavaScript as sketched below and provide better errors by throwing our own exceptions:

```JS
// Will fail if n1 is undefined, or is not a number
if(typeof n1 === "number") throw "Is not a number!"
// Will fail if callback is undefined or is not a function
if (typeof callback === "function") throw "Is not a function!"
```

</br>

### Exercises

1. Rewrite the Callback function expression (cb) to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.
2. Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error.

```JS
try {
  // code
} catch (e) {
  console.log(e);
}
```

## 8)

### JavaScripts map(), filter(), forEach and reduce() functions.

### Links

- [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

Those four functions are essentially the most well-known JS functions to use on an array.
So make sure you know how they work. The reduce() function can be a little bit difficult to understand at the beginning and hard to grasp , give it time. Nobody expect you to know everything in one day.

JavaScript has also Maps, Set and Arrays. You are welcome to read more about in here on this [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections). There are pretty similar to Javas own collection, but we are not going to focus on those three this semester.

### Exercises

```JS
var names = ["Lars", "Carla", "Jan", "Michelle", "Peter", "Bo", "Frederick"]
```

1. Click on the links above, and try to understand what each function does.
2. Which of the functions are returning an new array and which do not?
3. Use the JavaScript array above and ...

   - use the filter method to create a new array with only names of length <=3.
   - use the forEach method to iterate and print (console.log) both the original and the new array.

4. Use the names-array, and using its map method, create a new array with all names upper-cased.

5. Use the map and join functions, to create a new function, when given the name array, returns a HTML string with the names in an \<ul> tag as sketched below:

```JS
    <ul>
      <li>Lars</li>
      <li>Peter</li>
      <li>Jan</li>
      <li>Ian</li>
    </ul>
```

The output above was shown with newlines for readability, but this is actually what we want (why):

```JS
<ul><li>Lars</li><li>Peter</li><li>Jan</li><li>Ian</li></ul>
```

6. Given this JavaScript array

```JS
    var cars = [
        { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
        { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
        { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
        { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
        { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
    ];
```

- Use the filter filter function to get arrays with only:
  - Cars newer than 1999
  - Al Volvo’s
  - All cars with a price below 5000

7. Use map and join function to implement a function, that, given the cars array used above, will create, and return a string with a valid SQL statement to insert the data into a table with matching column names (id, year, make, model, price) as sketched below:

   `INSERT INTO cars (id,year,make,model,price) VALUES ( 1, 1997 'Ford''E350', 3000 );`
