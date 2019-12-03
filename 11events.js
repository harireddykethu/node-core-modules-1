// EventEmitter is a class
const EventEmitter = require('events');

// Create an instance
let ee = new EventEmitter();

ee.addListener('logging', () => {
  console.log('message is logging');
});

ee.emit('logging');

//  Handling event arguments
ee.addListener('cardSwiped', args => {
  console.log('Card Swiped:', args);
});

//  Raising an event with arguments
ee.emit('cardSwiped', { card: 1234, name: 'Karunakar' });
