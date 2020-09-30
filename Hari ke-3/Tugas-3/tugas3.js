// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
var str = ''
var soal1 = str.concat(kataPertama," ",kataKedua.charAt(0).toUpperCase() + kataKedua.substring(1)," ",kataKetiga," ",kataKeempat.toUpperCase());
console.log(soal1);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
var soal2 = parseInt(+kataPertama + +kataKedua + +kataKetiga + +kataKeempat);
console.log(soal2);

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substr(kataPertama.length + 1, 'javascript'.length) // do your own! 
var kataKetiga = kalimat.substr(kataPertama.length + kataKedua.length + 2, 'itu'.length); // do your own! 
var kataKeempat = kalimat.substr(kataPertama.length + kataKedua.length + kataKetiga.length + 3, 'keren'.length)
var kataKelima = kalimat.substr(kataPertama.length + kataKedua.length + kataKetiga.length + kataKeempat.length + 4, 'sekali'.length)

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// SOAL 4
var nilai = 49;
if (nilai >= 80) {
  console.log('indeksnya A');
} else if (nilai >= 70 && nilai < 80) {
  console.log('indeksnya B');
} else if (nilai >= 60 && nilai < 70) {
  console.log('indeksnya C');
} else if (nilai >= 50 && nilai < 60) {
  console.log('indeksnya D');
} else {
  console.log('indeksnya E');
}

// SOAL 5
var tanggal = 31;
var bulan = 3;
var tahun = 1998;

var x;
switch(bulan){
  case 1: x = "Januari"; break;
  case 2: x = "Februari"; break;
  case 3: x = "Maret"; break;
  case 4: x = "April"; break;
  case 5: x = "Mei"; break;
  case 6: x = "Juni"; break;
  case 7: x = "Juli"; break;
  case 8: x = "Agustus"; break;
  case 9: x = "September"; break;
  case 10: x = "Oktober"; break;
  case 11: x = "November"; break;
  case 12: x = "Desember"; break;
  default: x = "err";
}

if(x === "err") {
  console.log("format bulan salah")
} else {
  console.log(tanggal, x, tahun);
}
