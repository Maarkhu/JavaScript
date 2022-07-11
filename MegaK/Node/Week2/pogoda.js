const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

function safeJoin(base, target) {
  const targetPath = '.' + normalize('/' + `${target}`);
  return resolve(base, targetPath);
}

const getDataFileName = city => safeJoin(`./data/`, `${city}.txt`);

const processWeatherData = async (data, cityName) => {
   const foundData = await data.find((stationData) => stationData.stacja === cityName)
  console.log(foundData)
if (!foundData) {
  throw new Error('Hej there is no weather station with such name');
}
const {cisnienie: pressure,
wilgotnosc_wzgledna: humidity,
temperatura: temperature
} = foundData;

const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity} of humidity and pressure of ${pressure}.`
  console.log(weatherInfo);

const dateTimeString = new Date().toLocaleString()

await appendFile(getDataFileName(cityName), `${dateTimeString}\n${weatherInfo}\n`)
};

const checkCityWeather = async cityName => {
  try{
  const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop')
  const data = await res.json()
  await processWeatherData(data, cityName)
} catch (error) {
    console.log(`Hey, it's ana error maan:`, error);
  }
}

checkCityWeather(process.argv[2]);