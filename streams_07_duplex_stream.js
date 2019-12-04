const fs = require('fs');
const { Duplex, PassThrough } = require('stream');

class LoggerDuplex extends Duplex {
  constructor() {
    super();
  }

  _read() {}

  _write(fragment, encoding, callback) {
    this.push(fragment);
    console.log(`Duplex Write Logging: ${fragment.length} bytes written`);
    callback();
  }

  _final() {
    this.push(null);
  }
}

const writerStream = fs.createWriteStream('output-duplex.txt');
const passThroughEarly = new PassThrough();
const passThroughLate = new PassThrough();
const duplex = new LoggerDuplex();

process.stdin

  .pipe(passThroughEarly)
  .pipe(passThroughLate)
  .pipe(duplex)

  .on('error', error => console.error(error)); //  simple and direct

passThroughEarly.on('data', fragment => {
  console.log(`PassThroughEarly Logging: ${fragment.length} bytes written`);
});

passThroughLate.on('data', fragment => {
  console.log(`PassThroughLate Logging: ${fragment.length} bytes written`);
});

duplex.on('data', fragment => {
  console.log(`Duplex Event Logging: ${fragment.length} bytes written`);
});
