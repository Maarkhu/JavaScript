const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {createGzip, } = require('zlib');

(async () => {

 await pipeline(
   createReadStream('tree.webp'),
    createGzip(),
    createWriteStream('tree2.webp')
 )
  console.log('Done!');
})();

