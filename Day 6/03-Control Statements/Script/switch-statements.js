let char = prompt("Enter the charecter: (a to z): ");

char = char.toLowerCase();
/*
if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
  console.log(char + " is a vowels.");
} else {
  console.log(char + " is a constant.");
}*/

switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log(char + " is a vowels.");
    break;
  default:
    console.log(char + " is a constant.");
    break;
}
console.log("End");
