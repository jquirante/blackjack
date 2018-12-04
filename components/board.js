console.log('board loaded');

class Board {
    createBoard() {
        var board = document.createElement('div');
        board.setAttribute('class', 'boardContainer');
        document.getElementsByTagName('body')[0].appendChild(board);
        
    }
}