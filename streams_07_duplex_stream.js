const fs = require('fs');
const { Duplex, PassThrough } = require('stream');

class LoggerDuplex extends Duplex {
  constructor(index) {
    super();
    this.index = index;
  }

  _read() {}

  _write(fragment, encoding, callback) {
    this.push(fragment);
    console.log(
      `Duplex ${this.index} Write Logging: ${fragment.length} bytes written`
    );
    callback();
  }

  _final() {
    this.push(null);
  }
}

const writerStream = fs.createWriteStream('output-duplex.txt');
const passThroughEarly = new PassThrough();
const passThroughLate = new PassThrough();
const duplex = new LoggerDuplex(1);
const duplex2 = new LoggerDuplex(2);

process.stdin

  .pipe(duplex)
  .pipe(duplex2)

  .pipe(writerStream)

  .on('error', error => console.error(error)); //  simple and direct

passThroughEarly.on('data', fragment => {
  console.log(`PassThroughEarly Logging: ${fragment} written`);
});

passThroughLate.on('data', fragment => {
  console.log(`PassThroughLate Logging: ${fragment} written`);
});

// duplex.on('data', fragment => {
//   console.log(`Duplex Event Logging: ${fragment}  written`);
// });
