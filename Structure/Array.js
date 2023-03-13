let arr = ["Kuda","Liar", 12 , 13.5 , "Hello", 'world'];
console.log(arr);
console.log(arr[3]);
console.log(arr[8]);

console.log("Panjang array adalah " + arr.length);

arr.push('coding',"js");//menambah data di terakhir
console.log(arr);

arr.pop();//hapus data terakhir
arr.shift();// hapus data pertama
console.log(arr);
arr.unshift("Kanguru");// menambah data di awal
console.log(arr);
delete arr[4];//hapus berdasarkan index namun posisi dibiarkan kosong
console.log(arr);
arr.splice(3,2)// menghapus data dari index 3 sebanyak 2 data (sekaligus menghapus data kosong)
console.log(arr);
