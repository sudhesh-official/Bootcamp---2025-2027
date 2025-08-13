/*

const promise = new Promise((resolve, reject) => {
  const sum = 2; // 23
  if (sum == 2) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.error("Custom Error");
  });
*/

/*
setTimeout(() => {
  console.log("Hi");
}, 10000);
*/

/*
function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Sudhesh");
});
*/

setTimeout(() => {
  console.log("Normal : 1");
  setTimeout(() => {
    console.log("Normal : 2");

    setTimeout(() => {
      console.log("Normal : 3");
    }, 3000);
  }, 3000);
}, 3000);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
