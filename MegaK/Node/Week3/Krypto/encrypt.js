const {promisify} = require('util');
const {writeFile, readFile} = require('fs').promises;
const {encryptText, hash} = require('./cipher');
const [,,fileName, pwd]  = process.argv;
const {ENCRIPTION_SALT, HASH_SALT} = require('./constants');


(async () => {
  const text = await readFile(`./data/${fileName}`, 'utf8');
  const textHash = hash(text, HASH_SALT);
  const encrypted = await encryptText(text, pwd, ENCRIPTION_SALT);
  encrypted.hash = textHash;
  await writeFile(`./data/${fileName}`, JSON.stringify(encrypted), 'utf8');
})();
