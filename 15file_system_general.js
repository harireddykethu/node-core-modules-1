const fs = require('fs');

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('Error', err);
  } else {
    console.log('File contents', data);
  }
});

// Write a file
// If file exists append, else create a new one
//  https://nodejs.org/dist/latest-v10.x/docs/api/fs.html#fs_file_system_flags
fs.appendFile(
  'write.txt',
  'What were you reading of late?\n',
  { encoding: 'UTF8' },
  err => {
    if (err) {
      console.log('Write/append operation error', err);
    } else {
      console.log('Write/append operation completed');
    }
  }
);

// Create a new file it doesn't exist. If exists, overwrite the file
fs.writeFile('overwriting.txt', 'This is a test file', err => {
  if (err) {
    console.log('Write operation error', err);
  } else {
    console.log('Write operation completed');
  }
});

// Delete a file
fs.unlink('example.txt', err => {
  if (err) {
    console.log('Delete operation error', err);
  } else {
    console.log('Delete operation completed');
  }
});
