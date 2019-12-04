const fs = require('fs');
let content = '';

const readerStream = fs.createReadStream('example.txt');

readerStream.setEncoding('UTF8');

// Stream events: data, end, error
readerStream.on('data', fragment => {
  content += fragment;
});

readerStream.on('end', () => {
  // Operation complete
  console.log(content);
  readerStream.close();
});

readerStream.on('error', err => {
  console.log(err.stack);
});

// Writing from streams
const text =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."';

const writerStream = fs.createWriteStream('writer.txt');

writerStream.write(text, 'UTF8');

writerStream.end();

// Writer Stream events: finish and error
writerStream.on('finish', () => {
  console.log('Written');
  //  closing the stream
  writerStream.close();
});

writerStream.on('error', err => {
  console.log(err.stack);
});
