var prompt = require('prompt-sync')();

var x = Number(prompt('What do you want as your first number?'));
var y = Number(prompt('What do you want as your second number?'));
console.log(x + " plus " + y + " equals ", x + y);

var x = Number(prompt('What do you want as your first number?'));
var y = Number(prompt('What do you want as your second number?'));
console.log(x + " minus " + y + " equals ", x - y);

console.log(x + " times " + y + " equals ", x * y);
console.log(x + " divided by " + y + " equals ", x / y);
console.log("The remainder of " + x + " divided by " + y + " is ", x % y);
