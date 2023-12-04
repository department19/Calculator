const readline = require("readline-sync");

console.log("Welcome to the calculator");
console.log("==========================");
console.log("Please enter the operator:");
const operator = readline.prompt();
console.log("Please enter the first number:");
const firstNumber = readline.prompt();
console.log("Please enter the second number:");
const sencondNumber = readline.prompt();

let answer;
if (operator === "+") {
    answer = firstNumber + sencondNumber;
} else if (operator === "-") {
    answer = firstNumber - sencondNumber;
} else if (operator === "*") {
    answer = firstNumber * sencondNumber;
} else if (operator === "/") {
    answer = firstNumber / sencondNumber;
}

console.log("Answer: " + answer);
