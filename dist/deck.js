'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log('deck loaded');
var Card = require('card.js').default;

var Deck = function () {
    function Deck() {
        _classCallCheck(this, Deck);

        this.cardList = [];
    }

    _createClass(Deck, [{
        key: 'createDeck',
        value: function createDeck(card) {
            for (var cardNumber = 0; cardNumber < 52; cardNumber++) {
                var card = new Card();
                this.cardList.push(card);
            }
        }
    }]);

    return Deck;
}();

var testDeck = new Deck();
console.log(testDeck.createDeck());