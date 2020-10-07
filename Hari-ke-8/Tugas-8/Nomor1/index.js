var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
var time = 10000;
var index = 0;
const execute = (time, index) => {
  readBooks(time, books[index], function(times){
    if(times === time){
      index++;
      times = 10000;
    }
    if(index < books.length){
      execute(times, index)
    }
  })
}

execute(time, index);