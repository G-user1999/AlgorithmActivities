const reader = require("readline-sync");

// 1) The given code will count from zero to five. It will print "0,1,2,3,4,5" as individual results.

// 2) 
// a) "10,11,12,15" will be printed individualy.
// b) yes. By making (numero >=30) within the for.

// 3) "*""*""*""*"

// 1)
function main(){
  pets()
}
function pets(){
    const OwnedPets = []
    let Petnumber = reader.questionInt("How many pets do you own? ");

    if(Petnumber >= 1){
        for(let i = 0; i < Petnumber; i++){
            let a = reader.question("Insert their names one at a time: ")
            OwnedPets.push(a);
            }
       
    }else{
         console.log("You should adopt one.");
    }
    console.log(OwnedPets);
    }

main()

// 2)
const array1 = [12,23,45,67,78,90]
// A
const answer1 = array1[2]
console.log(answer1);
// B
function answer2(og){
  for(let i = 0; i < og.length; i++){
      b = og[i] / 10}
    }
console.log(answer2,b);
// C

