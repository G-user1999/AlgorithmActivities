const reader = require("readline-sync");

const numbers = [1 ,2 ,3 ,4 ,5 ,6]

numbers.splice(3,4)
numbers.push(7)
console.log(numbers);
console.log(numbers.length);