var daftarNama = [];
function tambahNama(name, sex){
  var obj = new Object();
  obj.nama = name;
  obj.jenisKelamin = sex;
  if(sex === 'laki-laki') obj.panggilan = 'Bapak';
  if(sex === 'perempuan') obj.panggilan = 'Ibu';
  return daftarNama.push(obj);
}

tambahNama('Kukuh', 'laki-laki');
tambahNama('Kiki', 'perempuan');

console.log(daftarNama.forEach((e, index) => console.log(index+1+'.', e.panggilan, e.nama)));

function luasLingkaran(radius) {
  return parseFloat(radius * radius * Math.PI).toFixed(2);
}

function luasSegitiga(a, t) {
  return parseFloat((a * t)/2).toFixed(2);
}

function luasPersegi(p, l) {
  return parseFloat((p * l)).toFixed(2);
}

console.log(luasLingkaran(5), luasSegitiga(7,3), luasPersegi(2,2.2));

var daftarAlatTulis = ["2. Pensil", "5. Penghapus", "3. Pulpen", "4. Penggaris", "1. Buku"];
daftarAlatTulis = daftarAlatTulis.sort();
var i = 0;
var txt = "";
while(daftarAlatTulis[i]){
  if(i === daftarAlatTulis.length-1) {
    txt += daftarAlatTulis[i]
  } else {
    txt += daftarAlatTulis[i] + '\n';
  }
  i++;
}
console.log(txt);


