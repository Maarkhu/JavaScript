const { promisify } = require('util');
const { lookup } = require('dns').promises;

// const promLookup = promisify(lookup);

/* lookup('google.com', (err, data) => {
  if (!err) { console.log(data); } else {
    console.log('Oh no', err);
  }
}); */

/* promLookup('google.com')
  .then((data) => { console.log(data); })
  .catch((err) => {
    console.log(err);
  }); */

(async () => {
  try {
    const data = await lookup('google.com');
    console.log(data);
  } catch (err) { console.log('Oh no!', err); }
})();
