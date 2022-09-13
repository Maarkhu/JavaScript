const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

(async () => {

 await pipeline(
   createReadStream('tree.webp'),
    createWriteStream('tree2.webp')
 )
  console.log('Done!');
})();

// Niepromisowe
// const r = createReadStream('tree.webp');
// const w = createWriteStream('tree2.webp');
//
// r.pipe(w);
//
//   r.on('end', () => console.log('Ready'));
// Niepromisowe dokładne
// r.on('data', data => w.write(data));
// r.on('end', () => {
//   w.close();
//   console.log('Ready');
// })