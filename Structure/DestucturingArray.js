const foods = [
    'Seafood','junkfood', 
    'streetfood','homefood'
]
const [firstFood, secondFood, thirdFood, fourthFood] = foods
// const [,secondFood] = foods
console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

const others = ['Korean food','japanese food']

let myFood= "Ice Cream";
let herFood = "Banana";

[myFood,herFood] = others;

console.log(myFood,"\n",herFood);

// Destruktur untuk menukar nilai 2 variabel
// Sebelum ES6
// var a = 1;
// var b = 2;
// var temp;
 
// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
 
// temp = a;
// a = b;
// b = temp;
 
// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
 
//  sesudah ES6

let a = 1
let b = 2

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 [a,b] = [b,a]
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Default value
const balls = ['basket'];

// const [myField,yourField] = balls // undefined
const [myField,yourField="Football"] = balls
console.log(myField,yourField);

