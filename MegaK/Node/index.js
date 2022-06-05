const { readFile } = require('fs');

readFile('./index.js', 'utf8', (err, data) => {
  if (err === null) {
    console.log(data);
  } else console.log('Ooo nie!', err);
});
