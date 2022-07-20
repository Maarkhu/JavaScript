const {exec} = require('child_process');

const cp = exec('ping 8.8.8.8');

cp.stdout.on('data', (data) => {
  console.log('Data:', data);
});

cp.stderr.on('data', (data) => {
  console.log('Error:', data);
});


cp.on('close', () => {
  console.log('Finished');
});