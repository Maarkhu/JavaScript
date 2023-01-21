const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const prog = process.argv;
if(prog.length !== 3) {
  console.log('Pierdu');
  return;
};

(async () => {
  try {
      const { stdout } = await exec(`ls -l`, {cwd: prog[2]});
      console.log('Kalkulator', stdout);
  } catch (e) {
    console.error('Oh no', e.stdout)
    console.log(e);
  }
})();