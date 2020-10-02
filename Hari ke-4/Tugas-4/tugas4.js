//Soal 1
console.log('SOAL 1');
console.log('LOOPING PERTAMA');
var x = 2;
while(x <= 20) {
  console.log(x, '- I love coding');
  x = x + 2;
}
console.log('LOOPING KEDUA');
var y = 20;
while(y >= 2) {
  console.log(y, '- I will become a frontend developer');
  y = y - 2;
}

//SOAL 2
console.log('SOAL 2');
for(i = 1; i <= 20; i++){
  if(i % 2 == 0) {
    console.log(i, ' - Berkualitas');
  } else {
    if (i % 3 === 0) console.log(i, ' - I Love Coding');
    console.log(i, ' - Santai');
  }
}

//SOAL 3
console.log('SOAL 3');
var rows = 7;
var output = '';
for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= i; j++) {
        output += '#';
    }
    console.log(output);
    output = '';
}

//SOAL 4
console.log('Soal 4');
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(' '));

//SOAL 5
console.log('Soal 5');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var arr = daftarBuah.sort();
arr.forEach(e => console.log(e));