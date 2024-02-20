import { Mammal } from "./Mammal";
import { Avian } from "./Avian";

const NewMammal = new Mammal("Cow",23,"cow fur")
console.log("Type of animal:",NewMammal[0]);
console.log("Age of the animal:",NewMammal[1]);
console.log("Fur type",NewMammal[2]);
Mammal.EmitSound()
Mammal.BreastFeed()

const NewAvian = new Avian("Eagle",12,"twelve feet long")
console.log("Type of animal:",NewAvian[0]);
console.log("Age of the animal:",NewAvian[1]);
console.log("Animals wingspan:",NewAvian[2]);
Avian.EmitSound()
Avian.Fly()
