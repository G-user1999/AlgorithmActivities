const reader = require("readline-sync");
//1)
A = reader.questionInt("Give number A: ")
B = reader.questionInt("Give number B: ")
function Sum(A,B) {
   return A + B
}
function Multiply(A,B) {
    return A * B
}
console.log("A and B summed is",Sum(A,B),"and multiplied it's",Multiply(A,B));
//2)
ztring = reader.question("Write a phrase: ")
function inverterString(ztring) {
    
}