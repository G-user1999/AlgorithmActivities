export class Animal{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    EmitSound():void{
        console.log("Animal Noises");
        
    }
}