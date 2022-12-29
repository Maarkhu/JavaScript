const {TikTok} = require('./tik-tok1')

new TikTok()
  .once('afterSecond', (data) => {
    console.log('Hi', data);})
  .on('afterFiveSeconds', (data) => {
    console.log('Tock');})
  .on('afterSecond', (data) => {
      console.log('Tick');
    }
  );