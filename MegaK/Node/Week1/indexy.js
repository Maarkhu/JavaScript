const { writeFile } = require('fs').promises;

(async () => {
  try {
    await writeFile('./data/hello.txt', 'she@domain.com;\n', { utf8: true, flag: 'a' });
    console.log('File is saved');
  } catch (err) { console.log('Oh, error', err); }
})();
