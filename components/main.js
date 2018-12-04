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

}


    



// define(['card', 'deck'], function (){
//     console.log('dep loaded');
// });