const {hash, compare} = require('bcrypt');

const pass = process.argv[2]
const passe = 'Marek jest glupi'
hash(passe, 10, (err, hash) => {
  if (err) {
    console.error(err);
  } else {
    console.log(hash);
  }
  compare ('Marek jest glupi', hash, (err, res) => {
    if (res) {
      console.log('Logged in')
    } else {
      console.log('Nope');
    }
  })
  if (passe === pass) {
    console.log('Trafiłeś')
  } return
});
console.log(pass);