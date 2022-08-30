// const {createHmac} = require('crypto');
//
// const salt = 'hjhskldjgklj897klasjg767647^$^';
//
// const hash = createHmac('sha512', salt)
//   .update('Marek jest glupi')
//   .digest('hex');
// console.log(hash);

const {pbkdf2} = require ('crypto');
const pass = process.argv[2];
const good_pass = 'c433609de03e4db95f48b2259688ea74e50d763dd25e93dff2404ed91954fc83ef6d477cd566fa7bd240c5c36ed9668e24b8893fa6579c438e6fd82c8adbc63f'
const salt = 'hklfjg89we7tw7t7w48ughwejklghjkh&*^*(^&*^&*%^';

pbkdf2(pass, salt, 1000000, 64, 'sha512', (err, res) => {
  if (err) throw err;
  console.log(res);
  console.log(res.toString('hex'));
  if (good_pass === res.toString('hex')) {
    console.log('Logged in')
  }
});