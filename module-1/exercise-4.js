var prompt = require('prompt-sync')();

var n = Number(prompt('Which number would you like to use?'));

// My answer
function isEven(n) {
  if (n % 2 === 0) {
    console.log("0");
  }
  if (n % 2 !== 0) {
    console.log("1");
  }
}

console.log(isEven(n));

// Johnny's suggestion: easier to test doesn't mix execution and
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

console.log(isEven(n));
/*
test("should be true with an even number") {
  assert.equal(isEven(2), true);
}
*/
