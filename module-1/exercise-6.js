var prompt = require('prompt-sync')();

var w = Number(prompt('How much do you weigh?', '   lbs'));
var a = Number(prompt('How many Medallas have you consumed?'));
var h = Number(prompt('How many hours have passed since your last Medalla?'));

function bac(w, a, h) {
  var BAC = ((a * 10 * 5.14) / (w * 0.69)) - (.015 * h);
  return BAC;
}

console.log(bac(w, a, h));
