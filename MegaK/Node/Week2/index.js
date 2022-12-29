const { readFile } = require('fs');

readFile('./gzip.js', 'utf8', (err, data) => {
  if (err === null) {
    console.log(data);
  } else console.log('Ooo nie!', err);
});
