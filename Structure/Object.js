const user = {
    nama : "Aku",
    umur : 19
};
let object = {
    nama : "hewan",
    type : "burung",
    "jumlah Kaki" : 2,
    kelas : "makhluk"
}
console.log(object.nama,object["jumlah Kaki"]);
console.log(`Aku adalah ${object.nama} ${object.type} yang berkaki ${object["jumlah Kaki"]}`);

object.type = "Mamalia darat";
object["jumlah Kaki"] = 4;
object = {kelas : "Makhluk hidup"} // mengisiasi ulang
console.log(object);
//mengubah nilai masih bisa meskipun const
user.nama = "Dia";
// menginisiasi ulang tidak bisa
// user = { umur : 20};
user.gender = "Male";
console.log(user.nama);
console.log(user.umur);
console.log(user);
delete user.nama;
console.log(user);