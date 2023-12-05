var myName = "Gabriel";
var isOk = true;
var myAge = 24;
var array = [1, 2, 3];
var newArray = [1, 2, 3];
console.log(myName, myAge);
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 8));
function sayHi(name) {
    console.log("hello,", name || "world");
}
sayHi();
