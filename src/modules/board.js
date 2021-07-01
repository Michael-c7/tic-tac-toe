
// cache the DOM
const board = document.querySelector(".board");
const boardPiecesAll = Array.from(document.querySelector(".board").children);
let count = 0;


export const initBoard = _ => {
    // console.log("hello world");
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
    playerChoice()
    disablePlayer()
    computerChoice()
    evaluateBoardForScore()
    // console.log(count)
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









/*determine if the current game is a win lose or tie*/
const evaluateBoardForScore = _ => {
    
/*middle tile winner scenario */
    //1.
        /*
        check tile above if it has the circle class
        check the tile under it if it also has circle class its a win
        */
    //2.
        /*if no win from scenario 1
        check the left most tile if it has the circle class
        check the title to the right if it has the circle class
        thats a win
        */

    const middleBoardPieceEvaluation = _ => {
        let centerPiece = boardPiecesAll[4];
        let leftSibling = boardPiecesAll[4].previousElementSibling;
        let rightSibling = boardPiecesAll[4].nextElementSibling;

        let topSibling = centerPiece.previousElementSibling.previousElementSibling.previousElementSibling;
        let bottomSibling = centerPiece.nextElementSibling.nextElementSibling.nextElementSibling;

        /*only checking for the palyers class right now,
        should also check for the computers class as well*/

        // scenario #1(horizontal)
        if(centerPiece.classList.contains("board__piece__player--active")
        && leftSibling.classList.contains("board__piece__player--active")
        && rightSibling.classList.contains("board__piece__player--active")) {
            console.log(" horzi winner")
        // scenario #2(vertical)
        } else if(centerPiece.classList.contains("board__piece__player--active")
        && topSibling.classList.contains("board__piece__player--active")
        && bottomSibling.classList.contains("board__piece__player--active")) {
            console.log("vert winner")
        }
    }

    middleBoardPieceEvaluation()
}