const { Readable } = require('stream');

const customer = {
  name: 'Ramesh',
  city: 'Delhi',
  joinedOn: new Date()
};

class ObjectStream extends Readable {
  //  String representation

  //   constructor(object) {
  //     super({ encoding: 'UTF-8' }); //default is binary
  //     this.object = object;
  //     this.index = 0;
  //     }

  //  Object mode representation
  constructor(object) {
    super({ objectMode: true }); //default is binary
    this.object = object;
    this.index = 0;
  }

  _read() {
    if (this.index < Object.keys(this.object).length) {
      const keyFragment = Object.keys(this.object)[this.index];
      const valueFragment = Object.values(this.object)[this.index];
      //   this.push(`${keyFragment}: ${valueFragment}`);   //  push a string
      this.push({ key: keyFragment, value: valueFragment, index: this.index }); //  push an object
      this.index++;
    } else {
      this.push(null);
    }
  }
}

const objectStream = new ObjectStream(customer);

objectStream.on('data', segment => {
  console.log(segment);
});

objectStream.on('end', () => {
  console.log('Stream completed');
});

objectStream.on('error', error => {
  console.error(error.message);
});
