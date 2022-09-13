
const {writeFile, readFile} = require('fs').promises;
const {decryptText, hash} = require('./cipher');
const [,,fileName, pwd]  = process.argv;
const {ENCRIPTION_SALT, HASH_SALT} = require('./constants');

(async () => {
  const parsedFile = JSON.parse(await readFile(`./data/${fileName}`, 'utf8'));
  console.log(parsedFile);
  const decryptedPass = await decryptText(parsedFile.encrypted, pwd, ENCRIPTION_SALT, parsedFile.iv);
  console.log(decryptedPass);
  const decryptedHash = hash(decryptedPass, HASH_SALT);
  console.log(decryptedHash);
  if (decryptedHash === parsedFile.hash) {
    console.log('brawo!');
    await writeFile(`./data/${fileName}`, decryptedPass, 'utf8');
  } else {
    console.error ('File is not original');
  }

})();