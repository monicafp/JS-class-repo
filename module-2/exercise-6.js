var prompt = require('prompt-sync')();

var x = Number(prompt("Enter any positive integer."));

for (var i = x - 1; i >= 0; i--) {
  console.log(i);
}
