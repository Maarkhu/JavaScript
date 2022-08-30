const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const {normalize, resolve} = require('path');


 function safeJoin(base, target) {
 const targetPath = '.' + normalize('/' + target)
   return resolve(base, targetPath);
 }


(async () => {
  try {
    const patha = process.argv[2];

    const { stdout } = await exec(`dir`, {
      cwd: `${patha}`
    });
    console.log(stdout);
  } catch (e) {
    console.error('Oh no', e)
  }

})();