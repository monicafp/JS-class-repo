var prompt = require('prompt-sync')();

var x = Number(prompt('What do you want as your first number?'));
var y = Number(prompt('What do you want as your second number?'));
console.log(x + y);

var eyesBornWith = Number(prompt('How many eyes were you born with?'));
var eyesPostAccident = Number(prompt('How many eyes do you have now?'));
var pirate = eyesBornWith - eyesPostAccident
console.log("You have " + pirate + " eye!");
