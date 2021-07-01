
// cache the DOM
const board = document.querySelector(".board");
const boardPiecesAll = Array.from(document.querySelector(".board").children);
let count = 0;


export const initBoard = _ => {
    console.log("hello world");
    resetBoard();
}



const resetBoard = _ => {
    boardPiecesAll.forEach(piece => {
        // removes background color & foreground color
        piece.classList.remove("board__piece__player--active");
        piece.classList.remove("board__piece__computer--active");
        // removes icons
        let pieceIcon = Array.from(piece.children)[0];
        pieceIcon.classList.remove("fa-times");
        pieceIcon.classList.remove("fa-circle-o");
    });
}



board.addEventListener('click', event => {
    round()
});


const round = _ => {
    evaluateBoardForScore()
    playerChoice()
    disablePlayer()
    computerChoice()
    console.log(count)

}


const playerChoice = _ => {
    let cloesetLi = event.target.closest("li");
    let cloesetLiIcon = Array.from(event.target.closest("li").children)[0];
    if(count >= 1) return;
    if(!cloesetLi.classList.contains("board__piece__player--active") && !cloesetLi.classList.contains("board__piece__computer--active")) {
        cloesetLi.classList.add('board__piece__player--active');
        cloesetLiIcon.classList.add("fa-circle-o");
    }
    count++;
}

const disablePlayer = _ => {
    board.removeEventListener("click", playerChoice);
    /*
    need to disable the player ability to click
    & choose a square for 275millseconds or until the computer chooses
    */
}



const computerChoice = _ => {
    let numsToChooseFrom = [];
    let computerpieceChoiceNum = null;

    /*get the board pieces that are currently available*/
    Array.from(document.querySelector(".board").children).forEach((piece, index) => {
        if(!piece.classList.contains("board__piece__player--active") && !piece.classList.contains("board__piece__computer--active")) {
            numsToChooseFrom.push(index)
        }
    });

    let randomIndex = Math.floor(Math.random() * numsToChooseFrom.length);
    computerpieceChoiceNum = numsToChooseFrom[randomIndex];

    // class stuff
    let choosenPiece = boardPiecesAll[computerpieceChoiceNum];
    let choosenPieceIcon = Array.from(choosenPiece.children)[0];

    setTimeout(_ => {
        choosenPiece.classList.add('board__piece__computer--active');
        choosenPieceIcon.classList.remove("fa-fa-circle-o");
        choosenPieceIcon.classList.add("fa-times");
    }, 275);

    count--;
}









const evaluateBoardForScore = _ => {
    /*determine if the current game is a win lose or tie*/

    /* Win / lose scenarios
    1.
    0 1 1
    1 0 1
    1 1 0

    2.
    0 0 0
    1 1 1
    1 1 1

    3.
    0 1 1
    0 1 1
    0 1 1

    know who gets the point basesd on what class the win pattern has
    */
}