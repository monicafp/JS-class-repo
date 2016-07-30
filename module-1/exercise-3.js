var prompt = require('prompt-sync')();

// Usage example:
var n = Number(prompt('How many more times?'));
console.log(n);
// Wrapping the prompt into a Number ensures you get the correct data type for your action (which is numerical).

// Exercise
var x = Number(prompt('What do you want as your first number?'));
var y = Number(prompt('What do you want as your second number?'));
console.log(x + " plus " + y + " equals ", x + y);
console.log(x + " minus " + y + " equals ", x - y);
console.log(x + " times " + y + " equals ", x * y);
console.log(x + " divided by " + y + " equals ", x / y);
console.log("The remainder of " + x + " divided by " + y + " is ", x % y);
