const {createReadStream, createWriteStream} = require('fs');
const {promisify} = require('util');
const {writeFile} = require('fs').promises;
const {pipeline} = require('stream').promises;
const scrypt = promisify(require('crypto').scrypt);
const {createCipheriv} = require('crypto');
const [,,fileName1, fileName2, pass]  = process.argv;
const {ENCRIPTION_SALT, HASH_SALT} = require('./constants');
const randomBytes = promisify(require('crypto').randomBytes);


(async () => {
const algorithm = 'aes-192-cbc';
const key = await scrypt(pass, ENCRIPTION_SALT, 24 )
  const iv = await randomBytes(16);
  await writeFile('iv.txt', JSON.stringify(iv.toString('hex')));
  await pipeline(
    createReadStream(fileName1),
    createCipheriv(algorithm, key, iv),
    createWriteStream(fileName2)
  );
  console.log('Done!');
})();

