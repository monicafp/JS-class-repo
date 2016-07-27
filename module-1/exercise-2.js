var x = 1;

// The expression 'console.log' will be evaluated before the variable's value is incremented. Thus, we will see the variable's original value of 1 printed onto the console, and the actual value of x will be then incremented to 2 (which we will NOT see printed out on the console).
console.log(x++);


// In the following case the variable's value will be incremented before the expression is evaluated. Because the variable's value had already been reset to 2 with the previous expression, we will take that value and increment it through the following expression which will evaluate to 3.
console.log(++x);


// Second example
var y = 27;

  // This should print out 27
console.log(y++);
  // This should print out 29
console.log(++y);


// Third example
var z = 4;

  // This should print out 11
console.log(++z + 6);
  // This should print out 5, and if I call the variable it should print out 6. This is because in the previous statement we incremented the value of the variable to 5, and after this statement we incremented it to 6, but given that the incement operator is after the variable we will not see the new value printed out onto the console.
console.log(z++);
console.log(z);
