const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
const filteredCities = cities.filter(str => !(str.length % 2)).map(str => str.toUpperCase());
console.log(filteredCities);