const fetch = require('node-fetch')

const cityName = process.argv[2];
console.log(cityName)

const processWeatherData = data => {
   const foundData = data.find((stationData) => stationData.stacja === cityName)
  console.log(foundData)
if (!foundData) {
  console.log('Hej there is no weather station with such name')
  return;
}
const {cisnienie: pressure,
wilgotnosc_wzgledna: humidity,
temperatura: temperature
} = foundData;

const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity} of humidity and pressure of ${pressure}.`
  console.log(weatherInfo);
};

fetch('https://danepubliczne.imgw.pl/api/data/synop')
  .then(r => r.json())
  .then(processWeatherData);