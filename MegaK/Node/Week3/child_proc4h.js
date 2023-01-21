const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const prog = process.argv;
if(prog.length !== 3) {
  console.log('Pierdu')
}

(async () => {
  try {
    if (prog === ('Kalkulator' && 'kalkulator')) {
      const { stdout } = await exec(`calc.exe`, );
      console.log('Kalkulator', stdout);
    } else if ( prog === ('Paint' && 'paint')) {
      const { stdout } = await exec(`mspaint.exe`);
      console.log('Paint', stdout);
    } else {
      console.error('Dupa');
    }
  } catch (e) {
    console.error('Oh no', e.stdout)
  }

})();