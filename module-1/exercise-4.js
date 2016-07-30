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
