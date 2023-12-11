var myName = "Gabriel";
var myLastName = "Padilha";
var amIAStudent = true;
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
function applyDiscount(price, Discount) {
    if (Discount === void 0) { Discount = 0.5; }
    return price + 5 - Discount;
}
console.log(applyDiscount(5));
console.log(applyDiscount(5, 4));
console.log("Hello, my Name is", myName, myLastName, "and I'm", myAge, "years old. And I am a student.", amIAStudent);
var sShow = "Friends";
var showSeasons = 8;
console.log(typeof sShow, typeof showSeasons);
var numberString = "15";
var myNumber = Number(numberString);
console.log(typeof myNumber);
var mySum = myNumber + 5;
console.log(mySum);
console.log(typeof numberString);
