//spread operator merupakan fitur baru dari  ES6 (...)
// yang berfungsi untuk menyebarkan nilai array
const foods = ['Seafood','junkfood', 'streetfood','homefood']
console.log(...foods);// penerapan spread operator
// console.log(foods[0],foods[1],foods[2],foods[3]);
const others = ['Korean food','japanese food']

const allFoods = [foods,others]//array 2D
const allFoodies = [...foods, ...others]//array biasa
// console.log(allFoods);
// console.log(allFoodies);

// tidak hanya untuk array namun juga dapat digunakan pada object
const objectA = {name: "Kobe B", age: 24}
const objectB = {gender: 'Male'}

const newObject = {...objectA,...objectB}

console.log(newObject);

