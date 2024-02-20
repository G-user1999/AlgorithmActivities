import { Animal } from "./Animal";

export class Avian implements Animal{
    
    public name: string
    public age: number
    private wingspan: string;
    constructor(name:string,age:number,wingspan:string){
    this.name=name
    this.age=age
    this.wingspan=wingspan
    }
    EmitSound(): void {
        console.log("Bird noises");
    }
    Fly():void{
        console.log("This animal flies"); 
    }
}