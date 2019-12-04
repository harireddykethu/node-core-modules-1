const fs = require('fs');
//  emulating cd command internally
console.log(`Starting at: ${process.cwd()}`);
try {
  process.chdir('node_core');
  //... You can do something in this directory such as reading or writing to file
  console.log(`Changed to: ${process.cwd()}`);

  fs.writeFile('sample.txt', 'Hello there from node.js!', err => {
    if (err) {
      console.log('Error writing file');
    } else {
      console.log('Completed');
    }
  });
} catch (err) {
  console.error(`Error: ${err}`);
}
