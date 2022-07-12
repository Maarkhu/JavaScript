const fetch = require('node-fetch');

const processWeatherData = async data => {
   const sorted = [...data].sort((a, b) => {
     if (Number(b.temperatura) > Number(a.temperatura)) {
       return 1;
     } else
       if (Number(b.temperatura) < Number(a.temperatura)) {
         return -1;
     } return 0;
})
  sorted.forEach((element) => {const {stacja, temperatura} = element;
    console.log(stacja, temperatura)})

};

const findWarmestPlaceInPoland = async () => {
  try{
  const res = await fetch('https://danepubliczne.imgw.pl/api/data/synop')
  const data = await res.json()
  await processWeatherData(data)
} catch (error) {
    console.log(`Hey, it's ana error maan:`, error);
  }}

findWarmestPlaceInPoland();