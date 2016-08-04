var prompt = require('prompt-sync')();

var n = Number(prompt("Choose a number."));

// Progressive Loop

function factorial(n) {
  var result = 1;
  if (n == 0) {
    return result;
  }
  for (var i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(n));


// Recursive

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return factorial(n - 1) * n;
}

console.log(factorial(n));
