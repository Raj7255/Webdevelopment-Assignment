/* The ternary operator, also known as the conditional operator, is a shorthand way of writing an if-then-else statement. "condition" is a boolean expression that evaluates to true or false, and "expression1" and "expression2" are the code blocks to be executed if the condition is true or false, respectively.

 syntax is "condition ? expression1 : expression2"

 Here's a program to check whether a number is even or odd using the ternary operator:*/

const number = 10;
const result = number % 2 === 0 ? "Even" : "odd";
console.log(result);
