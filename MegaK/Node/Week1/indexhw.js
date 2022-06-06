const { parse } = require('json5');
const { writeFile, readFile } = require('fs').promises;

(async () => {
  try {
    await writeFile('./data/input1.json', '[1,2,7,20,56,22]');
    const arr = parse(await readFile('./data/input1.json'));
    console.log(arr);
    const sum = arr.reduce((a, b) => a + b);
    await writeFile('./data/sum.txt', `${sum}`);
    console.log('Great, it works!', sum);
  } catch (err) {
    console.log('Oh no!', err);
  }
})();
