import { Animal } from "./Animal";

export class Mammal implements Animal{
    
    public set name(name:string) {
        this.name=name
    }
    public set age(age:number) {
        this.age =age
    }
    coat: string;
    constructor(coat:string){
        this.coat=coat
    }
    EmitSound(): void {
        console.log();
        
    }
    BreastFeed():void{
        console.log("This animal breastfeeds"); 
    }
}