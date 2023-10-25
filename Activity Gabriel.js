const reader = require("readline-sync");
//1
let name;
console.log(typeof name);
let age;
console.log(typeof age);
//It is undefined. because there is no set value.
name = reader.question("What is your name? ");
age = reader.questionInt("How old are you? ");
console.log(typeof name);
console.log(typeof age);
//It is no longer undefined. it is now string and number, because those are now their values.
console.log("Hello,", name, ",you are", age, "years old.");
//2
let question1 = reader.question("Is it raining today? ");
let question2 = reader.question("Are there seven days in a week? ");
let question3 = reader.question("Can people jump? ");

console.log("Is it raining today: ", question1);
console.log("Are there seven days in a week: ", question2);
console.log("Can people jump: ", question3);
//3
let a = 25
let b = 80
let c = 0

c = b
b = a
a = c

console.log("The new value of A is",a)
console.log("The new value of B is",b)