console.log('Hello');

class Imiona {
  constructor(marek, zegarek) {
    this.marek = marek;
    this.zegarek = zegarek;
  }
}
const pierdziarko = new Imiona('kwiaty', 'bratki');
console.log(pierdziarko);
pierdziarko.zegarek = ['roze', 'fafki'];
console.log(pierdziarko);
const zabarko = new Imiona('piłka', 'kulka');
console.log(zabarko);
