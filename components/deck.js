console.log('deck loaded');

class Deck {
    constructor () {
        this.cardList = [];
    }

    shuffleDeck() {
        
        var numberOfCardsToShuffle = this.cardList.length-1;

        while (numberOfCardsToShuffle > 0) {
            var randomCard = Math.floor(Math.random() * numberOfCardsToShuffle);
            var storedCardValue = this.cardList[randomCard];
            this.cardList[randomCard] = this.cardList[numberOfCardsToShuffle];
            this.cardList[numberOfCardsToShuffle] = storedCardValue;
            numberOfCardsToShuffle--;
        }
        
        console.log(this.cardList);
    }

    dealCard() {
        
    }
}
