//  for Windows, spwan has to work differently: https://stackoverflow.com/questions/18334181/spawn-on-node-js-windows-server-2012

const { spawn, exec } = require('child_process');
const command = spawn(process.env.comspec, ['/c', 'dir']);
// const command = spawn('/c', 'ab', [
//   '-n',
//   '100',
//   '-c',
//   '100',
//   'http://google.co.in/'
// ]);

//  Spawn creates the child process and streams the data back
//  No size limitation, hence suitable for high data transactions
// command.stdout.on('data', data => {
//   console.log(`stdout: ${data}`);
// });

// command.stderr.on('data', data => {
//   console.error(`stderr: ${data}`);
// });

// command.on('close', code => {
//   console.log(`child process exited with code ${code}`);
// });

//  Using exec(), we create a shell and then spawn a process
//  This buffers the data and max data output is 200KB
//  No suitable for high volume of data

exec('python test.py', (error, stdout) => {
  if (error) {
    console.log('Error', error);
  } else {
    console.log('Output', stdout);
  }
});
