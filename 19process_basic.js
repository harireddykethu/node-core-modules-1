//Getting the command line arguments
process.argv.forEach((arg, index) => {
  console.log(`USer has passed ${arg} at position ${index}`);
});

//  getting current working directory
console.log(process.cwd());

//  emulating cd command internally
console.log(`Starting at: ${process.cwd()}`);
try {
  process.chdir('node_core');
  //... You can do something in this directory such as reading or writing to file
  console.log(`Changed to: ${process.cwd()}`);
} catch (err) {
  console.error(`Error: ${err}`);
}

//  Node global configuration

console.log(process.config);

//  get cpu usage in microseconds
console.log(process.cpuUsage());

//  environment object
console.log(process.env);

console.log(process.geteuid());

console.log(process.memoryUsage());
