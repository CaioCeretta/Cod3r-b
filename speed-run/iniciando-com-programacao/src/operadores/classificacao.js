/*  Binary Operators operate over two operands, both arithmetic operations and relational operations deal with this kind
of operations, one operator works over another one, for example

For arithmetics: 1 value performs an arithmetic calculation over another
For assignments: one side has the expression, and the other the value we want to assign

*/

console.log(7 + 3 - 2)

console.log(7 >= 6)

/* Unary Operators, the main difference between the ++ before the variable and ++ after, the main difference is that

the ++variable is a pre-increment, the variable is incremented first and then its value is updated and returned, so

let x = 5;
let y = ++x // Increments x (x = 6)  and then assigns the value of x to y

console.log(x) // 6
console.log(y) //6

and variable++ is post incremental, the variable is returned first, which the value before the increment, and only theb
she is incremented

let x = 5;
let y = x++;

console.log(x); //6
console.log(y); //5

so in summary the first increments before returning the value, and the other is the opposite

If we are only incrementing the variable without assigning it or using its value immediately, the difference is not noticeable

so x = 5;
x++ x = 6
++x x = 7

The difference is only noticeable in this cases


Your explanation is clear, but it could benefit from slight rewording for clarity and grammar. Here's a polished version:

The difference is noticeable when the value is compared or used at the moment it is incremented. For example, console.log(x++) will produce a different result than console.log(++x).

With x++, the current value of x is used before the increment, so it prints the value before the increment happens.
With ++x, the value of x is incremented first, and then the updated value is used or printed.
In other words:

x++ assigns the current value and then increments.
++x increments first and then assigns or uses the new value.
 */

let numero = 123

numero++

++numero

console.log(numero)

numero--

console.log(numero)

//Ternary Operators
