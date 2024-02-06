import { Mammal } from "./Mammal";
import { Avian } from "./Avian";

const NewMammal = new Mammal("Cow",23,"Cow fur")
console.log("Type of animal:",Mammal.name);
console.log("Age of the animal:",Mammal.age);
console.log("Fur type",Mammal.coat);
Mammal.EmitSound()
Mammal.BreastFeed()

