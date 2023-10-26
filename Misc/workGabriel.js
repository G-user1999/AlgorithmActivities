const reader = require("readline-sync");

// 1) The given code will count from zero to five. It will print "0,1,2,3,4,5" as individual results.

// 2) 
// a) "10,11,12,15" will be printed individualy.
// b) yes. By making (numero >=30) within the for.

// 3) "*""*""*""*"

let Pets = reader.promptLoop("How many pets do you have? ")
const PetsOwned = 0
if (Pets = 0) {
    console.log("Too bad."); 
} else {
   while (PetsOwned < Pets) {
    for (let Pets = 0; Pets < PetsOwned+1; Pets++) {
       const PetNames = reader.question("what are their names? ")  
       console.log(PetNames);
    }
}
}

console.log(Pets);
console.log(PetNames);