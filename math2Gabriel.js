const reader = require("readline-sync");

a = reader.questionInt("insert a number: ")
b = reader.questionInt("insert a number: ")

console.log("Is the first number equal to the second number?",a===b)
console.log("Is the first number different from the second number?",a!==b)
console.log("Is the first number greater than the second number?",a>b)
console.log("Is the first number lesser than the second number?",a<b)
