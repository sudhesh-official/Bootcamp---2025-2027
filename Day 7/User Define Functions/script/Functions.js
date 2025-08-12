// Example-1:
/*
// Function Declaration
function add() {
  console.log("Hello");
}

add();
*/

// Example-2
// Function with a return statement
/*
function add() {
  return "Hello";
}
console.log(add());
*/

// Example-3
// Function with a return statement with argument
/*
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));
*/

// ------------------------------------------------
// Function with Arbitrary arguments
/*
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
*/

// spread operator (...)
/*
function sum(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
*/
// -------------------------------------------
// Function as Expression
/*
const add = function (a, b) {
  return a + b;
};
console.log(add(1, 2)); // 3
*/
//--------------------------------------------------
// Arrow Function [ECMAScript 6 (ES6)]
// syntax for an arrow function
// const functionName = (parameters) =>{ function body };
// For example
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2)); // 3

// 1. Using arrow functions with map():
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

// 2. Using arrow functions with filter():
let words = ["apple", "banana", "orange", "grape"];
let filteredWords = words.filter((word) => word.length > 5);
console.log(filteredWords); // ['banana', 'orange']
