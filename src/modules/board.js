
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
    disablePlayer()
    /*check if theres less than one piece left and dont run if there is*/
    computerChoice()
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
const evaluateBoardForScore = (currentPiece, playerClass, computerClass) => {
    let currentRow = currentPiece.getAttribute("data-row");
    let currentColumn = currentPiece.getAttribute("data-column");


    const classContainCheck = (firstPiece, secondPiece, thirdPiece, userClass) => {
        if(firstPiece.classList.contains(userClass)
        && secondPiece.classList.contains(userClass)
        && thirdPiece.classList.contains(userClass)) {
            console.log("class check winner")
        }
    }


    const topLeftBoardPieceEvaluation = _ => {
        let topLeftCornerBoardPiece = boardPiecesAll[0];
        let topLeftCornerBoardPieceLeft1 = topLeftCornerBoardPiece.nextElementSibling;
        let topLeftCornerBoardPieceLeft2 = topLeftCornerBoardPieceLeft1.nextElementSibling;
        let topLeftCornerBoardPieceDown1 = topLeftCornerBoardPieceLeft2.nextElementSibling;
        let topLeftCornerBoardPieceDown2 = topLeftCornerBoardPieceDown1.nextElementSibling.nextElementSibling.nextElementSibling;

        // top left corner to top right corner
        classContainCheck(topLeftCornerBoardPiece, topLeftCornerBoardPieceLeft1, topLeftCornerBoardPieceLeft2, playerClass);

        // top left corner to bottom left corner
        classContainCheck(topLeftCornerBoardPiece, topLeftCornerBoardPieceDown1, topLeftCornerBoardPieceDown2, playerClass);
    }

    const bottomRightPieceEvaluation = _ => {
        let bottomRightBoardPiece = boardPiecesAll[8];
        let bottomRightBoardPieceLeft1 = bottomRightBoardPiece.previousElementSibling;
        let bottomRightBoardPieceLeft2 = bottomRightBoardPieceLeft1.previousElementSibling;
        let bottomRightBoardPieceUp1 = bottomRightBoardPieceLeft2.previousElementSibling;
        let bottomRightBoardPieceUp2 = bottomRightBoardPieceUp1.previousElementSibling.previousElementSibling.previousElementSibling;

        // bottom right corner to top right corner
        classContainCheck(bottomRightBoardPiece, bottomRightBoardPieceLeft1, bottomRightBoardPieceLeft2, playerClass);

        // bottom right corner to bottom left corner
        classContainCheck(bottomRightBoardPiece, bottomRightBoardPieceUp1, bottomRightBoardPieceUp2, playerClass);
    }


    const middleBoardPieceEvaluation = _ => {
        let centerPiece = boardPiecesAll[4];
        let leftSibling = boardPiecesAll[4].previousElementSibling;
        let rightSibling = boardPiecesAll[4].nextElementSibling;

        let topSibling = centerPiece.previousElementSibling.previousElementSibling.previousElementSibling;
        let bottomSibling = centerPiece.nextElementSibling.nextElementSibling.nextElementSibling;

        let topLeft = topSibling.previousElementSibling;
        let bottomRight = bottomSibling.nextElementSibling;

        let topRight = topSibling.nextElementSibling;
        let bottomLeft = bottomSibling.previousElementSibling;


        /*only checking for the player class right now,
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
        // scenario #3 Diagonal(top left to bottom right)
        } else if(centerPiece.classList.contains("board__piece__player--active")
        && topLeft.classList.contains("board__piece__player--active")
        && bottomRight.classList.contains("board__piece__player--active")) {
            console.log("Diagonal(top left to bottom right) winner")
        // scenario #4 Diagonal(top right to bottom left)
        } else if(centerPiece.classList.contains("board__piece__player--active")
        && topRight.classList.contains("board__piece__player--active")
        && bottomLeft.classList.contains("board__piece__player--active")) {
            console.log("Diagonal(top right to bottom left) winner")
        }
    }

    const render = _ => {
        topLeftBoardPieceEvaluation()
        bottomRightPieceEvaluation()
        middleBoardPieceEvaluation()
    }

    render()
}




/*WHAT TO DO NEXT
FOR ALL PIECES
1. check if a side exisits
(does the side contain the player active class)
if does not stop.
if it does check one square over do it again
 */