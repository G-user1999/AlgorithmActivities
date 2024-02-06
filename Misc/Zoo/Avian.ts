import { Animal } from "./Animal";

export class Avian implements Animal{
    public name: string;
    public age: number;
    WingSpan: number;
    constructor(WingSpan:number){
        this.WingSpan=WingSpan
    }
    EmitSound(): void {
        console.log();
    }
    Fly():void{
        console.log("This animal flies"); 
    }
}