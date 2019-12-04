// EventEmitter is a class
const EventEmitter = require('events');

// Create an instance
let ee = new EventEmitter();

ee.emit('logging', 'Logging 0');

ee.addListener('logging', args => {
  console.log('Handler 1', args);
});

ee.emit('logging', 'Logging 1');

ee.addListener('logging', args => {
  console.log('Handler 2', args);
});

ee.emit('logging', 'Logging 2');
