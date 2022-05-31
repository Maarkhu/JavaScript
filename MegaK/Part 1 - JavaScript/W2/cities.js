// const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
// const filteredCities = cities
//     .filter(str => !(str.length % 2))
//     .map(str => str.toUpperCase());
// console.log(filteredCities);

const book = prompt('Wybierz ksiązkę podając liczbę z przedziału 0 - 9');

fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:')
  .then((response) => response.json())
  .then((data) => console.log(`Wybrałeś książkę o tytule:
     ${data.items[book].volumeInfo.title} autora ${data.items[book].volumeInfo.authors}`))
  .catch((err) => console.log('Coś poszłonie tak i nie wiem jeszcze co'));
