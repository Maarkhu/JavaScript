const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;
const {readFile} = require('fs').promises;
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const {createDecipheriv} = require('crypto');
const [,,fileName1, fileName2, pass]  = process.argv;
const {ENCRIPTION_SALT, HASH_SALT} = require('./constants');
const randomBytes = promisify(require('crypto').randomBytes);


(async () => {
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(pass, ENCRIPTION_SALT, 24 );
  const parsedIv = JSON.parse(await readFile('iv.txt', 'utf8'));
  console.log(parsedIv);
  const iv = Buffer.from(parsedIv, 'hex');
  console.log(iv);
  await pipeline(
    createReadStream(fileName1),
    createDecipheriv(algorithm, key, iv),
    createWriteStream(fileName2)
  )
  console.log('Done!');
})();

