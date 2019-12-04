const PoS = require('./12events_extending');
const Bank = require('./14events_listener');

const pointOfSale = new PoS();
const bankInstance = new Bank();

pointOfSale.on('cardSwiped', bankInstance.handleCardSwipe);
// pointOfSale.on('cardSwiped', bankInstance.handleCardSwipe);
// pointOfSale.on('cardSwiped', bankInstance.handleCardSwipe);

// console.log('Total listeners', pointOfSale.listenerCount('cardSwiped'));

// pointOfSale.removeListener('cardSwiped', bankInstance.handleCardSwipe);

// console.log('Total listeners', pointOfSale.listenerCount('cardSwiped'));

pointOfSale.swipe(12345, 'Kiran', 12000);
