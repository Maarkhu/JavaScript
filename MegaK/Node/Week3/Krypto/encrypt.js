const {promisify} = require('util');
const {createCipheriv} = require('crypto');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const {writeFile} = require('fs').promises;


const algorithm = 'aes-192-cbc';
const password = process.argv[2];
const salt = 'hhkjHKKH&(&)&^^&*^(^&^(^669860,./';

(async () => {
  const key = await scrypt(password, salt, 24);
  const iv = await randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update('Klap, klap, klap', 'utf8', 'hex');
  encrypted += cipher.final('hex')
  console.log({encrypted, iv: iv.toString('hex'),});
  await writeFile('./data/text.txt', JSON.stringify({password, encrypted, iv: iv.toString('hex'),}))
})();

// (async () => {
//   await writeFile('./data/text.txt', pass);
// })();


