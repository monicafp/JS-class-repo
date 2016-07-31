//Prompt user for 3 numbers (x, y, z).

//The x one will be the top limit. y will be the bottom limit.

//Print 0 if z is: y < z < x Print 1 if z is: y < x < z Print -1 if z is: z < y < x

var prompt = require('prompt-sync')();

var x = Number(prompt("Choose the first number"));
var y = Number(prompt("Choose the second number"));
var z = Number(prompt("Choose the third number"));

var topLimit = x;
var bottomLimit = y;

if (z > bottomLimit && z < topLimit) {
  console.log(0);
}
if (z > topLimit && z > bottomLimit) {
  console.log(1);
}
if (z < topLimit && z < bottomLimit) {
  console.log(-1);
}
