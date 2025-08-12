/*
for (initialize variable; condition checking; increment or decrement) {
  code to be executed
}
*/

// Example-1
/*
let sum = 0;
for (i = 2; i <= 100; i += 3) {
  if (i % 5 == 0) {
    sum += i; // sum = sum + i
    console.log(i, sum);
  }
}*/

// Example-2
/*
let arr = [];

// console.log(arr);

for (let i = 0; i < 100; i += 2) {
  arr.push(i);
}
console.log(arr);
console.log(arr[49]);
*/

// Nested For Loop:
/*
for (let i = 0; i <= 5; i++) {
  console.log("----------");
  for (let j = 0; j <= i; j++) {
    console.log(j);
  }
}
*/

// while loop example:
/*
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
*/

// do-while
// Example-1
/*
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);
*/

// Example-2
/*
let table = 5;
limit = 10;
i = 1;

do {
  console.log(table + " X " + i + " = " + table * i);
  i++;
} while (i <= limit);
*/

// For-of Loop Example:
/*
let names = ["Sudhesh", "Ram", "Sam", "Raja", "Arun"];
for (i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log("For of Loop : ");
for (let i of names) {
  console.log(i);
}
*/

// For in Loop:
/*
let user = {
  name: "Sudhesh R",
  age: 27,
  city: "Pollachi",
  contact: "8754310000",
};
// console.log(user.name);

for (let i in user) {
  console.log(i + " : " + user[i]);
}
*/

// Break Statement
/*
for (let i = 1; i <= 10; i++) {
  console.log(i);
  if (i == 4) {
    break;
  }
}*/

// Continue Statement
/*
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
*/
