const reader = require("readline-sync");
///1) A)
function name() {
    return "I'm Gabriel, I am 23 years old. I live in São leopoldo, I'm a student."
}

let print = name()
console.log(print);
///1) B)
  let Name2 = reader.question("give your name ")
    let Age2 = reader.questionInt("Give your age ")
    let City2 = reader.question("Give your city ")
    let Job2 = reader.question("Give your job ")
function Data(Name2,Age2,City2,Job2) {
  return `I am ${Name2}, I am ${Age2} years old. I live in ${City2}, I am a ${Job2}.`
}
let Result1 = Data(Name2,Age2,City2,Job2)
console.log(Result1);
///2) A)
a = reader.questionInt("Add a number ")
b = reader.questionInt("Add a number ")
function numbers(a,b) {
  return a+b
}
let sum = numbers(a,b)
console.log(sum);
///2) B)
function TorF(a,b) {
  if (a>=b) {
    return "A is greater or equal to B"
  } else {
    return "A is not greater or equal to B"
  }
}
let Result2 = TorF(a,b)
console.log(Result2);
///2) C)
c = reader.questionInt("Add a number ")
function EvenOrUneven(c) {
  if (c%2==0) {
    return "The number is even"
  } else {
    return "The number is uneven"
  }
}
let Result3 = EvenOrUneven(c)
console.log(Result3);
///2) D)
let phrase = "Hello World"
function Phrase(phrase) {
  return phrase.length, Upperphrase= phrase.toUpperCase()
}
let Result4 = Phrase(phrase)
console.log(Result4);
///3)
function begin1(g,h) {
  sum1 = g+h
return sum1
}
function begin2(g,h) {
  diff = g-h
  return diff
}
function begin3(g,h) {
  mult = g*h
  return mult
}
function begin4(g,h) {
  div = g/h
  return div
}
g = reader.questionInt("Give a number ")
h = reader.questionInt("Give a number ")

console.log(`G plus H equal to ${begin1(g,h)}`);
console.log(`The difference of G and H is ${begin2(g,h)}`);
console.log(`G and H multiplied is ${begin3(g,h)}`);
console.log(`G and H divided is ${begin4(g,h)}`);
///4) A)
let y = y =>"hi"
console.log(y());
///4) B)
let v =10 
let n = 10
let m = (j,k) => j+k
console.log(m(v, n));
///5)
a2 = 50
b2 = 50
const Pit = () =>
Math.sqrt((a2*2) + (b2*2))
console.log(Pit());
