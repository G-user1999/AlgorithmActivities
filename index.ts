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

//1
let a:number = 10
let b:number = 10
console.log(b);///the console will show 10
b = 5
console.log(a,b);///the console will show 10 5

//2
let a2:number = 10
let b2:number = 20
let c = a2
b2 = c
a2 = b2
console.log(a2,b2,c);///the console will log 10 10 10

//3
let z:number = 50
let x:number = 100
let y = z
z = x
x = y
console.log(z,x);

interface Car {
    brand: string;
    model: string;
    year: number;
    startEngine(): void;
    stopEngine?(): void;
}

class Toyota implements Car {
    brand: string
    model: string
    year: number

    constructor(brand: string, model: string, year: number)  {
    this.brand = brand;
    this.brand = model;
    this.year = year;
    }

    startEngine(): void {
        console.log('Engine started')
    }
}
