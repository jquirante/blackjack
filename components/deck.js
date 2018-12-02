console.log('deck loaded');

class Deck {
    constructor () {
        this.cardList = [];
    }

    createDeck(card) {
        for (var cardNumber = 0; cardNumber < 52; cardNumber ++) {
            var card = new Card;
            this.cardList.push(card);
        }
        return this.cardList;
    }
}

var testDeck = new Deck();
console.log('testDeck', testDeck.createDeck());