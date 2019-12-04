const fs = require('fs');

const writerStream = fs.createWriteStream('output.txt');

//process.stdin.pipe(writerStream).on('error', error => console.error(error));  //  simple and direct

process.stdin.on('data', fragment => {
  if (
    fragment
      .toString()
      .trim()
      .toLowerCase() === 'q'
  ) {
    writerStream.end(() => {
      console.log('file written');
      process.exit();
    });
  } else {
    writerStream.write(fragment); //  process.stdin.pause() causes program exit
  }
});
