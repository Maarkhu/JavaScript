const { readFile } = require('fs');
const { promisify } = require('util');

/* const readFilePromised = promisify(readFile); */

/* readFile('./index.js', 'utf8', (err, data) => {
  if (err === null) {
    console.log(data);
  } else console.log('Ooo nie!', err);
}); */

/* readFilePromised('./Week1/index.js', 'utf8')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Oh, no!', error);
  }); */

(async () => {
  try {
    const data = await promisify(readFile)('./Week1/index.js', 'utf8');
    console.log(data);
  } catch (err) {
    console.log('Oh no!', err);
  }
})();
