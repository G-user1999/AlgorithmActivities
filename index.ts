let myName:string = "Gabriel"

let isOk:boolean = true

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