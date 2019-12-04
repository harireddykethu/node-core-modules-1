const fs = require('fs');

const readerStream = fs.createReadStream('landscape.jpg', {
  highWaterMark: 65536 //  This is the default size of the buffer
});
const writerStream = fs.createWriteStream('landscape-copy.jpg');

readerStream.on('data', fragment => {
  console.log(`Read: ${fragment.length} bytes`);
  writerStream.write(fragment);
});

readerStream.on('close', () => {
  console.log('Completed');
  writerStream.end();
});

readerStream.on('error', error => {
  console.error(error);
});

writerStream.on('close', () => {
  console.log('Write process completed');
});
