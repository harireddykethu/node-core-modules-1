const fs = require('fs');

const readerStream = fs.createReadStream('landscape.jpg');
//const writerStream = fs.createWriteStream('landscape-copy.jpg');  // using default buffer size

//  Manually configuring the write buffer size to mitigate the backpressure issues:
const writerStream = fs.createWriteStream('landscape-copy.jpg', {
  highWaterMark: 65536 //  any arbitrary bytes; beware of memory impact!
});

readerStream.on('data', fragment => {
  const isFull = writerStream.write(fragment);

  if (isFull) {
    console.log('Pausing the reader stream due to backpressure');
    readerStream.pause();
  }
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

writerStream.on('drain', () => {
  console.log('Resuming...');
  readerStream.resume();
});
