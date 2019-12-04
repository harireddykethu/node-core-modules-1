const fs = require('fs');
const { Transform } = require('stream');

class UpperCaseTransformer extends Transform {
  constructor() {
    super();
  }

  _transform(fragment, encoding, callback) {
    this.push(fragment.toString().toUpperCase());
    callback();
  }

  _final() {
    this.push(null);
  }
}

const writerStream = fs.createWriteStream('output-transform.txt');
const upperCaseTransformer = new UpperCaseTransformer();

process.stdin
  .pipe(upperCaseTransformer)
  .pipe(writerStream)
  .on('error', error => console.error(error)); //  simple and direct

writerStream.on('close', () => {
  console.log('Write process completed');
});
