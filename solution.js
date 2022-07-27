// Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
  return n1 + n2;
}

// Function Expression
var sub = function (n1, n2) {
  return n1 - n2;
};

// Callback example
var cb = function (n1, n2, callback) {
  return (
    "Result from the two numbers: " +
    n1 +
    " and " +
    n2 +
    " = " +
    callback(n1, n2)
  );
};

/*
 *******************************
 ***********CALLBACKS***********
 *******************************
 */

// 1)

// 1- What will this print?
console.log(add(1, 2)); // 3
// 2- What will it print and what does add represent?
console.log(add("hund"));
console.log(
  "The function add, represents a function that can either add two numbers or concatenate two strings"
);
// 3- What will it print
console.log(add(1, 2, 3));
// 4- What will it print
console.log(add(1)); // NaN
// 5- What will it print
console.log(cb(3, 3, add));
// 6- What will it print
console.log(cb(4, 3, sub));
// 7- What will it print and what was the problem?
//console.log(cb(3,3,add()));
console.log("you are not allowd to call the function in the constructor");
// 8- What will it print
console.log(cb(3, "hh", add));

// 2)

var mul = function (n1, n2) {
  return n1 * n2;
};

console.log(cb(5, 5, mul));

// 3)
var div = cb(90, 9, function (n1, n2) {
  return n1 / n2;
});

console.log(div);

/*
 ********************************************
 ***Callbacks(with map,filter and forEach)***
 ********************************************
 */

// 1)
var names = [
  "Lu",
  "Lars",
  "Bodil",
  "Peter",
  "Boris",
  "Frederik",
  "Michelle",
  "Jan",
  "Bo",
];
var lessThenThree = names.filter((el) => el.length <= 3);

lessThenThree.forEach((element) => {
  console.log(element);
});

// 2)
var upperCase = names.map((el) => el.toUpperCase());
console.log(upperCase);

// 3)
var htmlString = names.map((el) => `<li>${el}</li>`);
htmlString.unshift("<ul>");
htmlString.push("</ul>");
var unsortedListString = htmlString.join("\n");
console.log(unsortedListString);

// 4)
var cars = [
  { id: 1, year: 1997, make: "Ford", model: "E350", price: 3000 },
  { id: 2, year: 1999, make: "Chevy", model: "Venture", price: 4900 },
  { id: 3, year: 2000, make: "Chevy", model: "Venture", price: 5000 },
  { id: 4, year: 1996, make: "Jeep", model: "Grand Cherokee", price: 4799 },
  { id: 5, year: 2005, make: "Volvo", model: "V70", price: 44799 },
];

var carsNewerThan = cars.filter((car) => car.year > 1999);
console.log(carsNewerThan);
var onlyVolvo = cars.filter((car) => car.make === "Volvo");
console.log(onlyVolvo);
var priceBelow = cars.filter((car) => car.price < 5000);
console.log(priceBelow);

// 5)
var sqlString = "INSERT INTO cars (id,year,make,model,price) VALUES ";

var sqlArray = cars.map((el, index) =>
  index < cars.length - 1
    ? `(${el.id},"${el.year}","${el.make}","${el.model}",${el.price}),`
    : `(${el.id},"${el.year}","${el.make}","${el.model}",${el.price});`
);

sqlArray.unshift(sqlString);
console.log(sqlArray.join("\n"));

/*
 *******************************
 ********Error Handling*********
 *******************************
 */

// 1)
var cbError = function (n1, n2, callback) {
  try {
    if (typeof callback === "undefined") throw "undefined!";
    if (typeof n1 !== "number" || typeof n2 !== "number") throw "not a number!";
    if (typeof callback !== "function") throw "is not a function!";

    return (
      "Result from the two numbers: " +
      n1 +
      " and " +
      n2 +
      " = " +
      callback(n1, n2)
    );
  } catch (e) {
    console.log("Input is " + e);
  }
};

/*
 *******************************
 ****Asynchronous Callbacks*****
 *******************************
 */

// 1)
var msgPrinter = function (msg, delay) {
  setTimeout(function () {
    console.log(msg);
  }, delay);
};

// console.log("aaaaaaaaaa");
// msgPrinter ("bbbbbbbbbb",2000);
// console.log("dddddddddd");
// msgPrinter ("eeeeeeeeee",1000);
// console.log("ffffffffff");

/*
 ***************************************
 ****this and constructor functions*****
 ***************************************
 */

// 1)
class Person {
  constructor(name) {
    this.name = name;
    console.log("Name: " + this.name);

    setTimeout(function () {
      console.log("Hi " + this.name); // Explain this
    }, 2000);
  }
}

var kurt = new Person("Kurt Wonnegut");
console.log(kurt);

// 2)
// TODO:

// 3)
// TODO:

// 4)
// TODO:
