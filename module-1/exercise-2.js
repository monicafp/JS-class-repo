var x = 1;

// If the operator appears before the variable, the value is modified before the expression is evaluated. If the operator appears after the variable, the value is modified after the expression is evaluated. In other words, given j = ++k;, the value of j is the original value of k plus one; given j = k++;, the value of j is the original value of k, which is incremented after its value is assigned to j.

console.log(x++);
console.log(++x);
