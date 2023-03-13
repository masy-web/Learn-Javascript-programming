/* ini adalah contoh 
komen*/
console.log("Hello World");
/*let fname;
fname = "Zee";
const lname = "Crono";
fname = "Bray";
// lname error cause const, but when let not error 
// lname = "Sir"; 
const fullName = fname +' '+ lname;
fname = "Cory";
// fullName = "N" ; Error when const
console.log("My full name is ",fullName);*/

let a = 12;
const b = 9;
let c =1
/*
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

console.log(++a)
console.log(a);
console.log(a++)
console.log(a) */
/*MULAI SINI======================
console.log(a === '12');
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);
console.log(`My age is ${b}.`);
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);
if (a > 1) {
    console.log("Tambah lagi");
    a += 1;
}
console.log(a);

const vip = true;
const discount = vip ? 0.1 : 0;
console.log(`Dapet diskon ${discount * 100}% nih`);

// Truthy Falsy
let name = "Didi"; //bisa kosong
let country = "NYC" ;
if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}
// Switch
switch (name) {
    case "Shaw":
        country = "LA";
        break;
    case "Dre":
        country = "Texas";
        break;
    default:
        break;
}
console.log(country);

// For
for (let i = 1; i < a; i++) {
    console.log(i);
}
// for of (modern)
const arr = [1,2,3,4,5]
for (const array  of arr) {
    console.log(array);
}
// while, do while
while (c < 20) {
    console.log(c);
    c++;
}

do{
    console.log(c);
    c++;
}while(c < 30);*/
/*for(let i = 1; i <= 5; i=1) {
    console.log(i);
}*/
// Quiz I data dan variabel
/**
 * TODO:
 * Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
 *  - firstName: bertipe data string, dengan nilai nama depan Anda.
 *  - lastName: bertipe data string, dengan nilai nama belakang Anda.
 *  - age: bertipe data number, dengan nilai umur Anda.
 *  - isMarried: bertipe data boolean, dengan bebas Anda tentukan.
 */
let firstName = "Masyhuri";
let lastName = "Farhan";
let age = 23;
let isMarried = false;

module.exports = {
    firstName , lastName, age, isMarried,
  };
console.log(age);
// Quiz II logika operator dan percabangan if
/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */
/*let score = 70;
if (score >= 90){
    console.log("'Selamat! Anda mendapatkan nilai A.'");
}else if(score >= 80 && score < 90){
    console.log('Anda mendapatkan nilai B.');
}else if (score >= 70 && score < 80) {
    console.log('Anda mendapatkan nilai C.');
} else if (score >=60 && score < 70) {
    console.log('Anda mendapatkan nilai D.');
} else if(score < 60){
    console.log('Anda mendapatkan nilai E.');
}*/
    
function scoreChecker(score) {
  let result ;

  // TODO

  if (score >= 90){
        result = "Selamat! Anda mendapatkan nilai A.";
    }else if(score >= 80 && score < 90){
        result = 'Anda mendapatkan nilai B.';
    }else if (score >= 70 && score < 80) {
        result = 'Anda mendapatkan nilai C.';
    } else if (score >=60 && score < 70) {
        result = 'Anda mendapatkan nilai D.';
    } else if(score < 60){
        result = 'Anda mendapatkan nilai E.';
    }

  // Jangan hapus kode ini
  return result;
}

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker(80);

