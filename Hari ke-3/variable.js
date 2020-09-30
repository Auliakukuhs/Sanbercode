// Variable merupakan suatu blok data atau wadah
// Variable digunakan untuk menampung nilai dari data
// Variable dalam javascript dapat menampung data dalam berbagai macam tipe tanpa harus mendeklarasikan tipe variabelnya

// Contoh :
var name = 'John';
var age = 29;
var isMarriage = false;

//Type data merupakan sekumpulan informasi yang memiliki nilai dan karakteristik tertentu

console.log(name, 'type data',typeof name); //string
console.log(age, 'type data', typeof age); //number
console.log(isMarriage, 'type data',typeof isMarriage);; //boolean

// SEPUTAR TIPE DATA //
/*
  ### String ###
    Merupakan tipe data yang berisi karakter-karakter yang
  dibungkus dalam double quote ("") atau single quote ('')
  contoh :
            var firstName = 'kukuh';
            var lastName = "Aulia";

  ### String Properties ###
  - .length : Mengembalikan jumlah karakter dari suatu string.
              var a = 'ini budi';
              console.log(a) -> 8

  - .charAt : Mengembalikan karakter pada indeks yang ditentukan.
              Indeks dimulai dari angka 0

  - .indexOf: Mengembalikan indeks dari karakter yang dicari.
              var b = 'namaku'
              console.log(b.chartAt(2) + ' merupakan indeks ke ' + b.indexOf(n)) -> m merupakan indeks ke 2

  - .concat : Menggabungkan string dan mengembalikan menjadi string baru.

  - .substring(indeksAwal, indeksAkhir)
        Mengembalikan potongan string dari indeks pada parameter pertama,
    sampai dengan indeks pada parameter kedua. Jika parameter kedua tidak
    ditentukan, maka otomatis berakhir pada indeks terakhir.
  
  - .substr(indeksAwal, jumlahString)
        Mengembalikan potongan karakter dari indeks pada parameter pertama,
    dan jumlah indeks yang ditentukan pada parameter kedua. Jika parameter 
    kedua tidak ditentukan, maka otomatis berakhir pada indeks terakhir.

  - .toUpperCase() : Mengubah semua karakter menjadi huruf kapital.
  - .toLowerCase() : Mengubah semua karakter menjadi huruf kecil.
  - .trim() : Mengembalikan string baru yang telah dihapus karakter whitespace.

  ### Mengubah Tipe Data ke String ###
  - String() -> var a = 7; console.log(String(a)); //'7'
  - .toString() -> var a = 7; console.log(a.toString()); //'7'

  ### Mengubah Tipe Data ke Number ###
  - Number()
      Mengubah tipe data menjadi number. Parameter harus berupa angka dan titik jika parameternya angka desimal.
    Jika karakternya bukan angka, maka akan mengembalikan nilai NaN
    var a = '1'; console.log(Number(a)); // 7
    var a = 'mantap'; console.log(Number(a)); // NaN

  - parseInt() : Mengubah karakter string menjadi number, apabila karakternya desimal maka angka dibelakang titik akan diabaikan.
                  Ketika karakternya bukan berupa angka maka akan mengembalikan nilai NaN
                  var decimal = '3.23'
                  console.log(parseInt(decimal)) // 3
  - parseFloat(): Mengubah karakter string menjadi number, disarankan apabila ingin mengembalikan nilai desimal maka gunakan method ini.
*/