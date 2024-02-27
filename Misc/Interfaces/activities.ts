for (let i = 1; i < 6; i++) {
console.log(i);
}

let colors:string[] =["red","blue","green"]

let tone ={
    "red":"dark",
    "blue":"light",
    "green":"light"
}

const RandomNumbers = ["111","222","333","444","555","666"]

RandomNumbers.forEach(item => {
    console.log(item);
    
});

for (const color of colors) {
    console.log(color);
    
}

let i2:Array<number> = [1,2,3,4,5,6,7,8,9,10]

for (const number of i2) {
    if (number %2) {
        console.log(number+number);
        
    }
}

i2.forEach(number2 => {
    console.log(number2);   
        
});

let vowels = ["A","E","I","O","U"]

