const {promisify} = require('util');
const {writeFile} = require('fs').promises;
const {encryptText} = require('./cipher');
const [,,fileName, pwd]  = process.argv;



(async () => {
  const text = 'Baba jaga'
  const salt = 'hljkhjhlkjh6h34jh74h7lk7'
  const encrypted = await encryptText(text, pwd, salt);
  await writeFile(`./data/${fileName}`, JSON.stringify(encrypted), 'utf8');
})();
