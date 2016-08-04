// Prompt user for String x. Print the reverse of x.

var prompt = require('prompt-sync')();

var x = prompt("Enter any word.");

// Put the given word into an array
// x = [" "];
// Slice the array to separate each character
// x.slice(0);

// reverse array
// x.reverse();

// push into new array
// var newArray = [ ];

// concat new array
// newArray.concat();

// Johnny's suggestion
x = x.split("").reverse().join("");
console.log(x);
