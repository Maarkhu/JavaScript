const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

(async () => {
  try {
    const ip = process.argv[2].replace(/[^0-9.]+/g, '');

    const { stdout } = await exec(`ping ${ip}`);
    console.log(stdout);
  } catch (e) {
    console.error('Oh no', e.stdout)
  }

})();