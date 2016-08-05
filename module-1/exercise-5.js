var prompt = require('prompt-sync')();

var x = Number(prompt('Which is the first number you would like to use?'));
var y = Number(prompt('Which is the second number you would like to use?'));

function switcharooX(x, y) {
  if (x % y === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

function switcharooY(x, y) {
  if (y % x === 0) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

switcharooX(x,y);
switcharooY(x,y);


// Johnny's suggestion:
function switcharoo(variable, x, y) {
  var result = "";
  switch (variable) {
    case "x":
      if (x % y === 0) {
        console.log("yes");
        result = result + "yes";
      } else {
        console.log("no");
        result = result + "no";
      }
      break;
    case "y":
      if (y % x === 0) {
        console.log("yes");
        result = result + "yes";
      } else {
        console.log("no");
        result = result + "no";
      }
      break;
    default:
  }
  return result;
}

switcharoo("x", x, y);
switcharoo("y", x, y);
