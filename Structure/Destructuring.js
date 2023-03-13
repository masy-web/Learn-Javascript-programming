//Destructuring Object and Array fitur baru di ES6
//sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.
//JSON (Javascript Object Notation)
//Object in array jSON
[
    {
      "id": 14,
      "title": "Belajar Fundamental Aplikasi Android",
      "author": "Google ATP"
    },
    {
      "id": 51,
      "title": "Belajar Membuat Aplikasi Android untuk Pemula",
      "author": "Google ATP"
    },
    {
      "id": 123,
      "title": "Belajar Dasar Pemrograman Web",
      "author": "Dicoding Indonesia"
    },
    {
      "id": 163,
      "title": "Belajar Fundamental Front-End Web Development",
      "author": "Dicoding Indonesia"
    }
  ]

//Start destructuring
const user ={
    firstName : 'Doel',
    lastName : 'betawi',
    age : 13
}
const firstName = user.firstName
const lastName = user.lastName
const age = user.age

// console.log(firstName,lastName,age);

// destructuring version ES6 (Object)


