const {promisify} = require('util');
const {createCipheriv} = require('crypto');
const {createDecipheriv} = require('crypto');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);


async function encryptText(text, pwd, salt) {
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(pwd, salt, 24);
  const iv = await randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex')
  return { encrypted, iv: iv.toString('hex'), };
};

async function decryptText(encrypted, pwd, salt, ivHex) {
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(pwd, salt, 24);
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8')
  return {decrypted, iv};
};

module.exports = {encryptText, decryptText};

// (async () => {
//   await writeFile('./data/text.txt', pass);
// })();


