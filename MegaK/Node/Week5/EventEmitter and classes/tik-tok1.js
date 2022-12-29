const {EventEmitter} = require('events')

class TikTok extends EventEmitter {
  constructor () {
  super();
  setInterval(() => {
    this.emit('afterSecond', 'test')
  }, 1000);
  setInterval(() => {
    this.emit('afterFiveSeconds')
  }, 5000);
}};

module.exports = {
  TikTok,
};