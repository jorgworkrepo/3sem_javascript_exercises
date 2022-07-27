# JavaScript Exercises Day 2

**Before we start with manipulating the DOM, we should also learn how error handling works in JS and about JS objects. A part from that we have a quick look at another feature (it is not explicit for JS), the ternary operator.**

## 1)

**Find the answer below by browsing through the internet.**

1. What is the difference between a object oriented programming language and a functional programming language?
2. What is the difference between imperative and declarative programming?
3. Which imperative or declarative programming languages do you know?
4. Explain what a pure-function and a higher-order-function is?
5. Explain server-side vs client-side code.

## 2)

## Error handling

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

## 3)

## The Conditional (Ternary) Operator

### Link

- [JS Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Exercise

```JS
const variable = condition === true ? "do something if true" : "or do something else if it is false!"
```

1. create a new variable called `age` and initial the variable with a number. (eks. your age)
2. create a ternary operator that can print two statements to the console. In case `age` is more or equal then 18, it should print `I'm aloud to drive a car!`, but if the number is lower, it will print `I'am to young to drive!`.

## 4)

## JavaScript class and objects

## Links

- []()

```JS
class Object {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}

// the old fashion way
function Customer(name, address, phone) {
  this.name = name;
  this.address = address;
  this.phone = phone;
}

// or

const obj = {
  name: "var1",
  address: "var2",
  phone: "var3",
};

console.log(new Object("Hans", "Kongensgade", "111-222-333"));
console.log(new Customer("Michelle", "Dronningsgade", "333-222-111"));
console.log(obj);
```

1. Create an object with four different properties, with values, of your own choice (ex: name, birthday, hobby, email).

## 5)

## The this keyword

**Regular function call:**

The this keyword points at the global object (see link below).

**Method call:**

The this variable points to the object that is calling the method.
The this keyword is not assigned a value until the function where it is defined is actually called.

## Links

- [Global object](https://javascript.info/global-object)
- [JS this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)

</br>

1. Call each method, one at a time, and try to understand the output.

- That is the global object. The global object is the default object in JavaScript.

```JS
console.log(this);
```

- In a web browsers, the window object is also the global object. (copy and paste the code below in your web browser console and see the output)

```JS
console.log(this === window);
```

- this is a regular function call, so the this keyword still points to the global object.

```JS
    function calculateAge(year) {
      console.log(2022 - year)
      console.log(this)
    }

    calculateAge(1977);
```

- The this variable points to the object that is calling the method. The "john"object.

```JS
    var john =
    {
      name: 'John',
      yearOfBirth: 1977,
      calculateAge: function () {
      console.log(this);
      console.log(2019 - this.yearOfBirth);
      }
    }

    john.calculateAge();
```

- A object with a regular function call. And again, the this keyword in the innerFunction points to the global object.

```JS
    var hans =
    {
      name: 'Hans',
      yearOfBirth: 1977,
      calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction() {
          console.log(this);

        }
        innerFunction();
      }

    }

    hans.calculateAge();
```

- Explain!

```JS
class Person {
  constructor(name) {
    this.name = name;
    console.log("Name: " + this.name);

    setTimeout(function () {
      console.log("Hi " + this.name); // Explain this
    }, 2000);
  }
}

const kurt = new Person("Kurt Schmidt");
console.log("I'm global: " + this.name); // Explain this
```

- We can fix the above code in two ways:

```JS
// Store a reference to the outer this
function Person(name) {
  this.name = name;
  var self = this;
  console.log("Name: " + this.name);
  setTimeout(function () {
    console.log("Hi  " + self.name);
  }, 2000);
}
```

**or**

```JS
// Using the bind(..) function
function Person(name) {
  this.name = name;
  console.log("Name: " + this.name);
  setTimeout(
    function () {
      console.log("Hi  " + this.name);
    }.bind(this),
    2000
  );
}
```
