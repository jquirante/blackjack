console.log('main loaded');
window.onload = startApp;

var card = new Card;
var board = new Board;
var deck = new Deck;
var player1 = new Player;

function startApp () {
    console.log('startApp without jQuery');
    board.createBoard();
    card.createCards(deck);
    console.log(deck.cardList);
    deck.shuffleDeck();
    deck.dealCards(player1);
    console.log('dealerCards', deck.dealerCards );
    console.log('playerCards', player1.playerCards );
    debugger;
    console.log('getCardTotal', player1.getCardTotal(player1.playerCards));

}


    



// define(['card', 'deck'], function (){
//     console.log('dep loaded');
// });