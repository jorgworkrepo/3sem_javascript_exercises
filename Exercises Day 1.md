# JavaScript Exercises Day 1

Some of those exercises can seem very basic, but the idea is, to get you comfortable using JavaScript syntax, before we dive into more challenging code assignments.

## 1)

**Find the answer below by browsing through the internet.**

1. What is the difference between a object oriented programming language and a functional programming language?
2. What is the difference between imperative and declarative programming?
3. Which imperative or declarative programming languages do you know?
4. Explain what a pure-function and a higher-order-function is?
5. Explain server-side vs client-side code.

## 2)

**JavaScript has a lot of embedded libraries, just like JAVA. Click on this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) and have a look if you can recognize some of the functions you have already used in JAVA. If you have done that, create four `Math` functions that can:**

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
   1. `Copenhagen`
   2. `Business`
   3. `Academy`
2. concatenate those variables into a new variable called `cph`, using JS String template literals. `Hint: You have to use backticks`.
3. make `cph` to upper case
4. make `cph` to lower case
5. replace the word `Copenhagen` with the word `Lyngby`
6. only print four letters of the word `Copenhagen`, so you get the word `open`.
7. split `cph` in three parts, so you end up with an array of length 3.

## 4)

**The Conditional (Ternary) Operator**

### Link

- [JS Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Exercise

1. create a new variable called `age` and initial the variable with a number.
2. create a ternary operator that can print two statements to the console. In case `age` is more or equal then 18, it will print `I'm aloud to drive a car!`, but if the number is lower it will print `I'am to young to drive!`.

## 5)

**This exercise is meant to introduce the JavaScript array, the only built-in list type in JavaScript, and the functionality it offers. Whenever you encounter a new language the very first thing you usually should focus on is its collection framework. All questions are one-liners, so the main task is to figure out which method to use (hints are given for each question).**

### Link

- [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Exercises

</br>

```
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
```

</br>

1. Create a new array called **all**, which should be a concatenation of the two arrays given above, starting with the boys and ending with the girls. To do this use a method called concat() to merge two or more arrays together. (alternative is shown below with the spread operator)

2. The array type has a method to **reduce** an array into a single string **join()** (you will love this method)

   1. Create a comma-separated string containing all the names from the all-array, separated by commas.
   2. Create a hyphen (-) separated string containing all the names from the all-array, separated by hyphens.

3. Add the names Lone and Gitte to the end of the array (remember, all can be done in one-liners)

   - Hint: **push(..)**

4. Add the names, Hans and Kurt, to the start of the array (See end of document for a better/newer way)

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

10. The default sort algorithm doesn’t handle the situation where the name is either capitalized or not. Write a user-defined sort method to fix this problem.

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
