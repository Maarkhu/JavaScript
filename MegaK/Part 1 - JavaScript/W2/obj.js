class Country {
  constructor(...earnedPlaces) {
    this.earnedPlaces = earnedPlaces;
  }

  addPlace(place) {
    this.earnedPlaces.push(place);
  }

  congrats() {
    for (let i = 0; i <= this.earnedPlaces.length; i++) {
      if (this.earnedPlaces[i] === 1) {
        console.log('bravo');
        break;
      }
    }
  }
}

const poland = new Country(1, 2);
const england = new Country(2, 3);
console.log(poland);
console.log(england);
poland.addPlace(3);
console.log(poland);
england.addPlace(1);
console.log(england);
poland.congrats();
console.log(poland);
