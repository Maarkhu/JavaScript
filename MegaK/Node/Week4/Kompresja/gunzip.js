const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGunzip} = require('zlib');

(async () => {

  await pipeline(
    createReadStream('tree.webp'),
    createGunzip(),
    createWriteStream('tree2.webp')
  )
  console.log('Done!');
})();

