/*

  OPERATOR CONDITIONAL

  Sebuah langkah atau cara dalam program komputer untuk mengambil sebuah keputusan
  dari sebuah kemungkinna benar atau salah terhadap beberapa kondisi.

*/

// Menjalankan kondisi jika premis bernilai true
if (true) {
  console.log("jalankan code")
}

var a = 12;
var b = 10;
if (a < b){
  console.log('nilai', a, 'lebih kecil dari', b);
} else {
  console.log('nilai', a, 'lebih besar dari', b);
}

console.log('\nBELI TELUR DAN BUAH');
var miniMarketOpen = 'y';
var telur = 'soldOut';
var buah = 'ready';
if(miniMarketOpen === 'y'){
  if(telur === 'soldOut' || buah === 'soldOut'){
    console.log('Belanjaan saya kurang lengkap karena ada barang yang habis');
    if (telur === 'soldOut') console.log('Telur Habis');
    if (buah === 'soldOut') console.log('buah Habis');
  } else {
    console.log('Semua belanjaan tersedia, aman.');
  }
} else {
  console.log('Minimarketnya tutup, saya pulang lagi.');
}
