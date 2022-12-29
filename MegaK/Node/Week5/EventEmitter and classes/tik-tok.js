const {EventEmitter} = require('events')

function tikTok () {
  const ee = new EventEmitter();
  setInterval(() => {
  ee.emit('afterSecond', 'test')
  }, 1000);

  setInterval(() => {
  ee.emit('afterFiveSeconds')
  }, 5000);
  return ee;
};

module.exports = {
  tikTok,
};