var prompt = require('prompt-sync')();

var n = Number(prompt("Enter any positive integer."));

function countChar() {
  var binary = n.toString(2);
  var counter = 0;
  for (var starter = 0;  starter < binary.length; starter++) {
    if (binary.charAt(starter) === 0) {
       counter += 1;
    }
  }
  return counter;
}

console.log(countChar())
