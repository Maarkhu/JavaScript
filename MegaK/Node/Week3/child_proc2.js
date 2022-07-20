const {exec} = require('child_process');

exec('node test.js', (error, stdout, stderr) => {
  if(error){
    console.error('Oh, no', error);
  } else if (stderr) {
    console.error('Error in app!', stderr);
  } else {
    console.log('Program is finished', stdout);
  }
});