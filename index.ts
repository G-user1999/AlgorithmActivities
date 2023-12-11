let myName:string = "Gabriel"
let myLastName:string ="Padilha"
let amIAStudent:boolean = true
let myAge:number = 24

let array:Array<number> = [1,2,3]

let newArray: number[] = [1,2,3]

console.log(myName,myAge);

function sum(a:number,b:number):number{
    return a+b
}

console.log(sum(5,8));

function sayHi(name?:string,) :void {
    console.log("hello,", name || "world")
}

sayHi()

function applyDiscount(price:number, Discount:number = 0.5) :number {
    return price + 5 - Discount
}

console.log(applyDiscount(5));
console.log(applyDiscount(5,4));

console.log("Hello, my Name is",myName,myLastName,"and I'm",myAge,"years old. And I am a student.",amIAStudent);

const sShow:string = "Friends"
const showSeasons:number = 8

console.log(typeof sShow,typeof showSeasons);

const numberString:string = "15"
const myNumber:number = Number(numberString)
console.log(typeof myNumber);
const mySum:number = myNumber + 5
console.log(mySum);
console.log(typeof numberString);
