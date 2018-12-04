console.log('card loaded');

class Card {
    constructor ( suite, cardClass ) {
        this.suiteOptions = ["clubs", "spades", "hearts", "diamonds"];
        this.classOptions = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.suite = suite;
        this.cardClass = cardClass;
        }
        
    createCards(deck) {
        
        for (var suiteIndex = 0; suiteIndex < this.suiteOptions.length; suiteIndex++ ) {
            for ( var classIndex = 0; classIndex < this.classOptions.length; classIndex ++) {
                var card = new Card (this.suiteOptions[suiteIndex], this.classOptions[classIndex]);
                deck.cardList.push(card);
            }
        }
        
        

    }

  
}

