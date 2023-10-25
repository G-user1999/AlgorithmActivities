const reader = require("readline-sync");
//const ola = "Hello World!";
const name = reader.question("What is your name: ");
//let num1 = reader.questionInt("Insert the first value: ");
//let num2 = reader.questionFloat("Insert the second value: ");
//let booleana = true;
//const num3 = num1 + num2;

//console.log(booleana);
//console.log(!num1);
//console.log(name,",what is the sum of", num1, "and", num2, "?");
//console.log("The sum of the numbers is",num3);

//a = reader.questionInt("insert a number: ")
//b = reader.questionInt("insert a number: ")

//console.log(a+b)
//console.log(a-b)
//console.log(a*b)
//console.log(a/b)

//=== equal
//!== different
//> >= greater than/ greater or equal
//< <= lesser than/ lesser or equal
//a = 10
//b = 20
//console.log(a===b)
//console.log(a!==b)
//console.log(a>b)
//console.log(a<b)

const hello =  `Hello ${name}`
console.log(hello.length);