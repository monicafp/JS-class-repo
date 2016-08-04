var prompt = require('prompt-sync')();

var n = Number(prompt("Choose a number."));

function factorial(n) {
  var result = 1;
  /*if (n == 0) {
    return result;
  }
  */
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
};

factorial(n);
