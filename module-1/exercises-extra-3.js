var prompt = require('prompt-sync')();

var n = Number(prompt("Choose a number"));

var result = n / n - 1;

console.log(result);

if( result % 2 === 0 ) {
  console.log("Even");
} else {
  console.log("Odd");
}
