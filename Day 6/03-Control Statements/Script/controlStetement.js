/*
let ms = prompt("Enter Your Marital status (married/unmarried): ");
// console.log(ms.toLowerCase());
if (ms.toLowerCase() == "married") {
  console.log("eligible to the insurence.");
} else if (ms.toLowerCase() == "unmarried") {
  console.log("Enter the Below details: ");
  let gender = prompt("Enter Your Gender: (male/female): ");
  if (gender.toLowerCase() == "male" || gender.toLowerCase() == "female") {
    let age = prompt("Enter Your Age: ");
    if (gender == "male" && age >= 30) {
      console.log("eligible to the insurence.");
    } else if (gender == "female" && age >= 25) {
      console.log("eligible to the insurence.");
    } else {
      console.log("Not Eligible.");
    }
  } else {
    console.log("Invalid Gender Input. Try again.!");
  }
} else {
  console.log("Invalid Input. Try again.!!");
}
*/

// If condition Example:
/*
let age = prompt("Enter Your Age : ");
if (age != null && age >= 18) {
  console.log("You are Eligible for Vote..");
}
*/

// Else If Condition Example:
/*
let age = prompt("Enter Your Age : ");
if (age != null && age >= 18) {
  console.log("You are Eligible for Vote..");
} else {
  console.log("You are Not Eligible for Vote..");
}
*/

// Else If Condition Example:
/*
90-100  A Grade
80-89   B Grade
70-79   C Grade
<70     D Grade
*/
/*
let avg = 70;

if (avg >= 90 && avg <= 100) {
  console.log("Grade A");
} else if (avg >= 80 && avg <= 89) {
  console.log("Grade B");
} else if (avg >= 70 && avg <= 79) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}*/

// Nested If Statement
/*
min mark >=35
  91-100 A
  81-90 B
  71-80 C
  D
*/

let english = 95,
  tamil = 98,
  maths = 34;
let total, avg;
total = english + tamil + maths;
avg = total / 3;
console.log("Total   : " + total);
console.log("Average : " + avg.toFixed(5));

if (english >= 35 && tamil >= 35 && maths >= 35) {
  console.log("Result  : Pass");
  if (avg > 90 && avg <= 100) {
    console.log("Grade   : A Grade");
  } else if (avg > 80 && avg <= 90) {
    console.log("Grade   : B Grade");
  } else if (avg > 70 && avg <= 80) {
    console.log("Grade   : C Grade");
  } else {
    console.log("Grade   : D Grade");
  }
} else {
  console.log("Result  : Fail");
  console.log("Grade   : No Grade");
}
