import { Animal } from "./Animal";

export class Mammal implements Animal{
    
    public name: string
    public age: number
    private coat: string;
    constructor(name:string,age:number,coat:string){
    this.name=name
    this.age=age
    this.coat=coat
    }
    EmitSound(): void {
        console.log();
        
    }
    BreastFeed():void{
        console.log("This animal breastfeeds"); 
    }
}