var prompt = require('prompt-sync')();

var size = Number(prompt("Choose a size."));

var myArray = [];

function genArray(size) {
  for (var i = 0; i < size; i++) {
    myArray.push(0);
  };
  console.log(myArray.length);
  console.log(myArray);
}

genArray(size);

// Johnny's suggestion:
myArray.length = size;
console.log(myArray);
