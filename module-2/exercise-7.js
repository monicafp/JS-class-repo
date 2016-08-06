var prompt = require('prompt-sync')();

var n = Number(prompt("Enter size of array."));

var myArray = [];

for (var i = 0; i <= n - 1; i++) {
  myArray.push(prompt("Enter a value for your array."));
}

console.log(myArray);
