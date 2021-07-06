
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
    evaluateBoardForScore(event.target, "board__piece__player--active", "board__piece__computer--active");
});





const round = _ => {
    playerChoice()
    // disablePlayer()

    /*check if theres less than one piece left
    and dont computerChoice run if there is*/
    computerChoice()
    // console.log(count)
}

/*
TODO
1. figure how to get a tie game
2. work on the score board
3. add additonal stuffs





check for a tie
if all the board tiles have either
board__piece__player--active
OR
board__piece__computer--active

return a tie
*/



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
const evaluateBoardForScore = (currentPiece, playerClass, computerClass) => {
    let currentRow = currentPiece.getAttribute("data-row");
    let currentColumn = currentPiece.getAttribute("data-column");


    const classContainCheck = (firstPiece, secondPiece, thirdPiece, playerClass, computerClass) => {
        if(firstPiece.classList.contains(playerClass)
        && secondPiece.classList.contains(playerClass)
        && thirdPiece.classList.contains(playerClass)) {
            return "player";
        } else if(firstPiece.classList.contains(computerClass)
        && secondPiece.classList.contains(computerClass)
        && thirdPiece.classList.contains(computerClass)) {
            return "computer";
        }
    }



    const winConditionCheck = (condition1, condition2, condition3, condition4) => {
        if(condition1 === "player" || condition2  === "player" || condition3  === "player" || condition4  === "player") {
            console.log("player gets a point");
            // reset board
            // resetBoard()
        } else if(condition1 === "computer" || condition2  === "computer" || condition3  === "computer" || condition4  === "computer") {
            console.log("computer gets a point");
            // reset board
            // resetBoard()
        }
    }





    const topLeftBoardPieceEvaluation = _ => {
        const topLeftCornerBoardPiece = boardPiecesAll[0];
        const topLeftCornerBoardPieceLeft1 = topLeftCornerBoardPiece.nextElementSibling;
        const topLeftCornerBoardPieceLeft2 = topLeftCornerBoardPieceLeft1.nextElementSibling;
        const topLeftCornerBoardPieceDown1 = topLeftCornerBoardPieceLeft2.nextElementSibling;
        const topLeftCornerBoardPieceDown2 = topLeftCornerBoardPieceDown1.nextElementSibling.nextElementSibling.nextElementSibling;

        // win conditions
        let topLeftCornerToTopRightCorner = classContainCheck(topLeftCornerBoardPiece, topLeftCornerBoardPieceLeft1, topLeftCornerBoardPieceLeft2, playerClass, computerClass);
        let topLeftCornerToBottomLeftCorner = classContainCheck(topLeftCornerBoardPiece, topLeftCornerBoardPieceDown1, topLeftCornerBoardPieceDown2, playerClass, computerClass);

        winConditionCheck(topLeftCornerToTopRightCorner, topLeftCornerToBottomLeftCorner);
    }



    const bottomRightPieceEvaluation = _ => {
        const bottomRightBoardPiece = boardPiecesAll[8];
        const bottomRightBoardPieceLeft1 = bottomRightBoardPiece.previousElementSibling;
        const bottomRightBoardPieceLeft2 = bottomRightBoardPieceLeft1.previousElementSibling;
        const bottomRightBoardPieceUp1 = bottomRightBoardPieceLeft2.previousElementSibling;
        const bottomRightBoardPieceUp2 = bottomRightBoardPieceUp1.previousElementSibling.previousElementSibling.previousElementSibling;

        // win conditions
        let bottomRightCornerToTopRightCorner = classContainCheck(bottomRightBoardPiece, bottomRightBoardPieceLeft1, bottomRightBoardPieceLeft2, playerClass, computerClass);
        let bottomRightCornerToBottomLeftCorner = classContainCheck(bottomRightBoardPiece, bottomRightBoardPieceUp1, bottomRightBoardPieceUp2, playerClass, computerClass);

        winConditionCheck(bottomRightCornerToTopRightCorner, bottomRightCornerToBottomLeftCorner);
    }



    const middleBoardPieceEvaluation = _ => {
        const centerPiece = boardPiecesAll[4];
        const leftSibling = boardPiecesAll[4].previousElementSibling;
        const rightSibling = boardPiecesAll[4].nextElementSibling;
        const topSibling = centerPiece.previousElementSibling.previousElementSibling.previousElementSibling;
        const bottomSibling = centerPiece.nextElementSibling.nextElementSibling.nextElementSibling;
        const topLeft = topSibling.previousElementSibling;
        const bottomRight = bottomSibling.nextElementSibling;
        const topRight = topSibling.nextElementSibling;
        const bottomLeft = bottomSibling.previousElementSibling;


        // win conditions
        let horizontal = classContainCheck(centerPiece, leftSibling, rightSibling, playerClass, computerClass);
        let vertical = classContainCheck(centerPiece, topSibling, bottomSibling, playerClass, computerClass);
        let diagonalTopLeftToBottomRight = classContainCheck(centerPiece, topLeft, bottomRight, playerClass, computerClass);
        let diagonalTopRightToBottomLeft = classContainCheck(centerPiece, topRight, bottomLeft, playerClass, computerClass);

        winConditionCheck(horizontal, vertical, diagonalTopLeftToBottomRight, diagonalTopRightToBottomLeft);
    }



    const render = _ => {
        topLeftBoardPieceEvaluation()
        bottomRightPieceEvaluation()
        middleBoardPieceEvaluation()
    }



    render()
}