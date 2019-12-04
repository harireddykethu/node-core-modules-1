const EventEmitter = require('events');

class PoS extends EventEmitter {
  swipe(cardNumber, name, amount) {
    console.log(
      `PoS Card ${cardNumber} of ${name} is being swiped for amount ${amount}`
    );
    this.emit('cardSwiped', { cardNumber, name, amount });
  }
}

module.exports = PoS;
