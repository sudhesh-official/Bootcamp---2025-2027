// Normal way to create an array
/*
let a = [10, 20, 30, 40, 50];
console.log(a);
console.table(a);
// Accessing an array
console.log(a[2]);
*/

// create an array using Array() Class
/*
let b = new Array(10, 20, 30, 40, 50);
console.log(b);

let c = new Array("Sudhesh", 20, true, { age: 25, dept: "IT" }, 50.25);
console.log(c[3]);
console.table(c[3]);

// For of Loop
for (let i of c) {
  console.log(i);
}
*/

// forEach()
// Example-1
/*
const number = [1, 2, 32, 4, 5, 48, 11, 56, 25, 66, 85];

number.forEach((i) => {
  console.log(i);
});
number.forEach((value, index) => {
  console.log("index : " + index + " value : " + value);
});
*/

// Example-2
/*
const user = [
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "madurai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
];

console.table(user);

user.forEach((i) => {
  console.log(i.city);
});
*/

// Map()
/*
const users = [
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 8, city: "madurai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 15, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 25, city: "chennai", salary: 10000 },
  { names: "Ravi", age: 12, city: "chennai", salary: 10000 },
];
console.table(users);

let a = users.map((user) => ({
  ...user,
  status: user.age >= 18 ? "Ok" : "Not",
}));

console.log(a);
console.table(a);

const prices = [15.99, 29.5, 7.25];
const formattedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log(formattedPrices);
*/

// Template Literal:
/*
myName = "Sudhesh";
age = 25;
//console.log("My Name is " + myName + " and i'm " + age + " Years of old.");
console.log(`My Name is ${myName} and i'm ${age} years of old.`);
*/

// Filter()
const values = [0, "", false, null, undefined, 1, "hello"];
const truthyValues = values.filter((value) => value);
console.log(truthyValues);

const numbers = [3, 6, 8, 11, 14];
const filteredNumbers = numbers.filter((number) => number > 5 && number < 10);
console.log(filteredNumbers);
