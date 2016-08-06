var prompt = require('prompt-sync')();

var x = Number(prompt("Enter any positive integer."));

function isPrime(x) {
    for(var i = 2; i < x; i++) {
        if(x % i === 0) {
            return false;
        }
    }
    return x > 1;
}

isPrime(x);
