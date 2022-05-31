// class Country {
//     constructor(country, score, medal) {
//         this.country = country;
//         this.score = score;
//         this.medal = medal;
//         this.places = [];
//     }
//     scoreAdd(newPoint) {
//         this.score = (this.score + newPoint);
//     }
//     medalAdd(newMedal) {
//         this.medal = (this.medal + newMedal);
//     }
//     checkMedal() {
//         if (this.medal > 10) {
//             console.log('To niemożliwe! Nigdy jeszcze Polska nie zdobyła tylu medali. Brawo!!!')
//         }
//     }
//     placeAdd(pladd) {
//         this.places.push(pladd);
//     }
//     checkPlaces() {

//         for (let i = 0; i < this.places.length - 1; i++) {
//             if (this.places[i] === 1)
//                 console.log(`Impossible! ${this.country} have a first place !!!`)
//         }
//     }
// }
// const poland = new Country('Poland', 5, 1, 8);
// const finland = new Country('Finland', 1, 2, 1);

// console.log(poland);
// poland.scoreAdd(2);
// poland.medalAdd(6);
// poland.medalAdd(1);
// console.log(poland);
// poland.checkMedal();
// poland.placeAdd(2);
// poland.placeAdd(1);
// poland.placeAdd(3);
// poland.placeAdd(5);
// poland.checkPlaces();
// console.log(poland);

/**
 * 1. Usuń konstruktor, metody i wszystko po klasie z rzeczy, które pisaliśmy wspólnie.
 * 2. Stwórz właściwość przechowującą zajęte miejsca w zawodach.
 * 3. Stwórz metodę, która pozwoli dodać nowe zajęte miejsce do właściwości danego obiektu.
 * 4. Stwórz dwa obiekty reprezentujące 2 kraje i dodaj do nich kilka zajętych miejsc, używając przygotowanej przes siebie metody możesz ją wywoływac wielokrotnie).
 * 5.* Dodaj metodę, która sprawdzi czy kraj posiada jakiekolwiek pierwsze miejsce i jeżeli tak to wyświetl "Brawo!".
 */
// Rozwiązanie YuGi - problem z undefined
class Country {
  constructor(nameCountry) {
    this.name = nameCountry;
    this.medals = [];
  }

  addMedal(score) {
    return this.medals.push(score);
  }

  checkGoldMedal() {
    this.medals.forEach((el) => {
      if (el === 'gold') {
        return console.log(`${this.name} Gratulacje mamy złoto :)`);
      }
    });
  }
}

const poland = new Country('Poland');
const russia = new Country('ZSRR');

poland.addMedal('gold');
russia.addMedal('silver');
poland.addMedal('gold');
russia.addMedal('bronze');
poland.addMedal('silver');
russia.addMedal('gold');

poland.checkGoldMedal();
russia.checkGoldMedal();
console.log(poland);
console.log(russia);
