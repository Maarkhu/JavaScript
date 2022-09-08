const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

(async () => {

 await pipeline(
   createReadStream('tree.webp'),
    createWriteStream('tree2.webp')
 )
  console.log('Done!');
})();