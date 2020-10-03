//Soal 1
console.log('SOAL 1');
function halo(){
  return "Halo Sanbers!";
}
console.log(halo());

//SOAL 2
console.log('SOAL 2');
function kalikan(x, y){
  return x*y;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

//SOAL 3
console.log('SOAL 3');
function introduce(name, age, address, hobby){
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}!`;
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
 
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);


//SOAL 4
console.log('Soal 4');
function clone(arrayDaftarPeserta){
  return Object.assign({}, arrayDaftarPeserta);
}
function renameKey(object, key, newKey) {
  const clonedObj = clone(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
arrayDaftarPeserta = renameKey(arrayDaftarPeserta, 0, 'nama');
arrayDaftarPeserta = renameKey(arrayDaftarPeserta, 1, 'jenis_kelamin');
arrayDaftarPeserta = renameKey(arrayDaftarPeserta, 2, 'hobi');
arrayDaftarPeserta = renameKey(arrayDaftarPeserta, 3, 'tahun_lahir');

console.log(arrayDaftarPeserta);

//SOAL 5
console.log('Soal 5');
var buah1 = {nama: 'strawberry', warna: 'merah', 'ada bijinya': 'tidak', harga: 9000};
var buah2 = {nama: 'jeruk', warna: 'oranye', 'ada bijinya': 'ada', harga: 8000};
var buah3 = {nama: 'Semangka', warna: 'Hijau & Merah', 'ada bijinya': 'ada', harga: 10000};
var buah4 = {nama: 'Pisang', warna: 'Kuning', 'ada bijinya': 'tidak', harga: 5000};

var arr = [buah1, buah2, buah3, buah4];
console.log(arr[0]);

//SOAL 6
console.log('Soal 6');
var dataFilm = []

function tambahData(obj){
  dataFilm.push(obj);
}

var obj1 = {nama: 'Star Wars: The Phantom Menace', durasi: '2 Jam' , genre: 'Sci-fi', tahun: 1999};
var obj2 = {nama: 'Jumanji', durasi: '2 Jam' , genre: 'Sci-fi', tahun: 1999};
tambahData(obj1);
tambahData(obj2);
tambahData(obj2);
console.log(dataFilm);