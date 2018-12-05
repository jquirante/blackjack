console.log('player loaded');

class Player {
    constructor(name) {
        this.name;
        this.playerCards = [];
    }

    getCardTotal (cardsArray) {
        var total = null;

        for ( var cardValue = 0; cardValue < cardsArray.length; cardValue ++ ) {
            switch (val) {
                case 'A':
                    total += 11;
                    break;
                case '2':
                    total += 2;
                    break;
                case '3':
                    total += 3;
                    break;
                case '4':
                    total += 4;
                    break;
                case '5':
                    total += 5;
                    break;
                case '6':
                    total += 6;
                    break;
                case '7':
                    total += 7;
                    break;
                case '8':
                    total += 8;
                    break;
                case '9':
                    total += 9;
                    break;
                case '10':
                case 'J':
                case 'Q':
                case 'K':
                    total += 10;
                    break;
            }
        }
        
        this.total = total;
    }

    
} 