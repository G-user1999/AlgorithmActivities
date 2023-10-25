const reader = require("readline-sync");

a = reader.questionInt("insert a number: ")
b = reader.questionInt("insert a number: ")

console.log("The Result is: ",a+b);

x = reader.questionInt("insert a number: ")
y = reader.questionInt("insert a number: ")
z = reader.questionInt("insert a number: ")

console.log("The Result is: ",[x*y]/z);

x = reader.questionInt("insert a number: ")
y = reader.questionInt("insert a number: ")
z = reader.questionInt("insert a number: ")

console.log("The Result is: ",[x-y]*z);

a = reader.questionInt("insert a number: ")
b = reader.questionInt("insert a number: ")

console.log("The Result is: ",a%b);