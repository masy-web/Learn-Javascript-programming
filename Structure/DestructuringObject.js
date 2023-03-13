//Destructuring object bersion ES6
const user ={
    firstName : 'Joe',
    lastName : 'Doel',
    age : 13
}

const {firstName,lastName,age} = user
// const {lastName} = user // hanya mendestruktur salahsatu
// console.log(firstName,lastName,age);

const profil = {
    nama : "Kent Bo",
    usia : 9,
    jenisKelamin : 'L'
}
let nama = "Ken Arok";
let usia = 19;
({nama, usia} = profil)
// {nama, usia} = profil //Block statement
console.log(nama, usia);

// const {nama, usia,diaDewasa } = profil //undefine
// const {nama, usia,diaDewasa=false } = profil
// console.log(nama,usia, diaDewasa);

// Different Local Variabel
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
  }
   
  const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
   
  console.log(localFirstName);
  console.log(localLastName);
  console.log(localAge);
   