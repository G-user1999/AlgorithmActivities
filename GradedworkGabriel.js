const reader = require("readline-sync");
num1 =5
num2 =4
if (num1,num2 > 0){
    sum1 = num1+num2
    console.log(sum1);
} else{
    console.log("invalid number");
};
///
num3 =1
num4 =3
if ((num3 % 2) == 0 && (num4 % 2) != 0 || (num3 % 2) != 0 && (num4 % 2) == 0){
    sum2 = num3*num4
    console.log(sum2);
}else{
    console.log("invalid number");
};
///
num5 =6
num6 =6
if (num5,num6 !=0){
    sum3 = num5/num6
    console.log(sum3);
} else{
    console.log("invalid number");
};
///
const numbers = [1,2,3,4,5]
console.log(numbers);
numbers.splice(4,1)
numbers.splice(0,1)
console.log(numbers);
///
let leters = ("ASDFGHJKY")
let letersVowels = leters.match(/[AEIOU]/g)
console.log(letersVowels);
///
let letersconsonants = leters.match(/[^AEIOU]/g)
console.log(letersconsonants);
///
const numberArray=[1,2,3,4]
if (numberArray.length >2){
    numberArray.splice(0,3)
    console.log(numberArray)
}else{
    console.log("invalid");
}
///
const challenge=[6,8,10]
if (challenge.length >2, challenge[0]>0){
    challenge.splice(1,2)
    console.log(challenge);
}else{
    console.log("Invalid");
}