var prompt = require('prompt-sync')();

var x = prompt("Enter any word.");

x2 = x.split("").reverse().join("");

if (x2 == x) {
  console.log(x, "is a palindrome!")
} else {
  console.log(x, "is not a palindrome.")
}
