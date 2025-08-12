/*
  1997
  var
    2016 E6
  let
  const
*/

// Var Type with scope check.
/*
if (true) {
  var a = 25; // Declaration or memory reservation
  var b = 35;
  var a = 40; // Re-declaration / reasigning
}
console.log(a + b);
*/

// let Type with scope check.
/*
if (true) {
  let a = 25; // Declaration or memory reservation
  let b = 35;
  a = 40; // reasigning
  console.log(a + b);
}*/

// const Type with scope check.
if (true) {
  const a = 25; // Declaration or memory reservation
  const b = 35;
  console.log(a + b);
}
