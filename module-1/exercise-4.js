var prompt = require('prompt-sync')();

var n = Number(prompt('Which number would you like to use?'));

function isEven(n) {
  if (n % 2 === 0) {
    console.log("0");
  }
  if (n % 2 !== 0) {
    console.log("1");
  }
}

isEven(n);

/*

Initially I wrote the following answer:

    var n = Number(prompt('Which number would you like to use?'));

    if (n % 2 === 0) {
      console.log("0");
    }

    if (n % 2 !== 0) {
      console.log("1");
    }

This worked, but later I took a closer look at the exercise's title "isEven" and decided to go with a function instead.

*/
