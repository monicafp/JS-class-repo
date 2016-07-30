var prompt = require('prompt-sync')();

var x = Number(prompt("Enter rectangle's width"));
var y = Number(prompt("Enter rectangle's length"));

console.log("Rectangle's area is", x*y);
console.log("Rectangle's perimeter is", 2*x + 2*y)
