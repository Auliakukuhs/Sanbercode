var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
var time = 10000;
var index = 0;
const execute = (time, index) => {
  readBooksPromise(time, books[index]).then(
    times=>{
      if(times < books[index].timeSpent){
        index++;
        times = 10000;
      }
      if(index < books.length){
        execute(times, index)
      }
    }
  )
}

execute(time, index);