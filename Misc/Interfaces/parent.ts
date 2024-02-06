import { homoSapiens } from "./homoSapiens"

export class father implements homoSapiens {
    public name: string
    public age: number

    constructor(name:string,age:number){
    this.name = name
    this.age = age
    }
    breathe(): void {
        console.log("He breathes");
        
    }
    eat(): void {
        console.log("He eats");
        
    }
    walk(): void {
        console.log("He walks");
        
    }
}