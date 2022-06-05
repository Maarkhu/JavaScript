const { writeFile, readFile, appendFile } = require('fs').promises;

const FILE_NAME = './data/hello.txt';
(async () => {
  try {
    const numberFromFile = (await readFile(FILE_NAME, 'utf8')).split('\n');
    console.log(numberFromFile);
    const numArr = Number(numberFromFile[numberFromFile.length - 1]);
    console.log(numArr);
    await appendFile(FILE_NAME, `\n${numArr * 2}`, 'utf-8');
    console.log('File is saved');
  } catch (err) { console.log('Oh, error', err); }
})();
