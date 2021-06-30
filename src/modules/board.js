
// cache the DOM
const board = document.querySelector(".board");
const boardPiecesAll = Array.from(document.querySelector(".board").children);
// console.log(boardPiecesAll)



export const initBoard = _ => {
    console.log("hello world");
    // resetBoard();
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
    playerChoice()
});


const round = _ => {
    //playerChoice()
    //computerChoice()

}


const playerChoice = _ => {
    let cloesetLi = event.target.closest("li");
    let cloesetLiIcon = Array.from(event.target.closest("li").children)[0];
    
    if(!cloesetLi.classList.contains("board__piece__player--active") && !cloesetLi.classList.contains("board__piece__computer--active")) {
        cloesetLi.classList.add('board__piece__player--active');
        cloesetLiIcon.classList.add("fa-circle-o");
    }
}



const computerChoice = _ => {
    /*STEPS
    1. get all the available board pieces(up to date)
    2. randomly choose one(up to date numbers)
    */

    // let cloesetLi = event.target.closest("li");
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

    choosenPiece.classList.add('board__piece__computer--active');
    choosenPieceIcon.classList.add("fa-times");


}

computerChoice()