//SOAL 1
console.log('Soal 1');
class Animal {
  constructor(name, legs = 4, cold_blooded = false){
    this.name = name;
    this.legs = legs;
    this.cold_blooded = cold_blooded;
  }
  
  get animalDesc() {
    let blood;
    if(this.cold_blooded) blood = 'dingin'
    else blood = 'panas'
    return `Ini ${this.name}, memiliki ${this.legs} kaki dan merupakan hewan berdarah ${blood}`
  }
}

// Code class Ape dan class Frog di sini
class Ape extends Animal {
  constructor(name, legs = 2, cold_blooded){
    super(name, cold_blooded);
    this.legs = legs;
  }

  yell(){
    return 'Auooo';
  }
}

class Frog extends Animal {
  constructor(name, legs, cold_blooded){
    super(name, legs, cold_blooded);
  }

  jump(){
    return 'hop hop';
  }
}
 

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log(sheep.animalDesc);

var sungokong = new Ape("kera sakti")
console.log(sungokong.animalDesc);
console.log(sungokong.yell()); // "Auooo"
 
var kodok = new Frog("buduk");
console.log(kodok.animalDesc);
console.log(kodok.jump()); // "hop hop" 

//SOAL 2
console.log('\n#############################\nSoal 2');
class Clock {
  constructor({ template }) {
    this.template = template;
    this.timer;
  }

  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10)
      hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10)
      mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10)
      secs = '0' + secs;

    var output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.timer = setInterval(this.render.bind(this), 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 