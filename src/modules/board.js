import { scoreBoard,setScore } from "./scoreBoard";



// cache the DOM
const board = document.querySelector(".board");
const boardPiecesAll = Array.from(document.querySelector(".board").children);
let count = 0;


export const initBoard = _ => {
    // console.log("hello world");
    scoreBoard();
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



const observer = new MutationObserver(mutations => {
    evaluateBoardForScore("board__piece__player--active", "board__piece__computer--active");
});


observer.observe(board, {
    attributes:true,
    subtree:true,
    attributeFilter: ["class"]
})










const round = _ => {
    playerChoice()
    // disablePlayer()

    /*check if theres less than one piece left
    and dont computerChoice run if there is*/
    computerChoice()
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
const evaluateBoardForScore = (playerClass, computerClass) => {

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
        let playerWinCondition = condition1 === "player" ||   condition2  === "player" ||   condition3  === "player" ||   condition4  === "player";
        let computerWinCondition = condition1 === "computer" || condition2  === "computer" || condition3  === "computer" || condition4  === "computer";

        let boardPiecesPlaced = boardPiecesAll.filter(boardPiece => {
            if(boardPiece.classList.contains(playerClass) || boardPiece.classList.contains(computerClass)) {
                return boardPiece;
            }
        });



        if(playerWinCondition) {
            // console.log("player gets a point");
            // add point to player score
            setScore("player", 1);
            setTimeout(_ => {
                resetBoard()
            }, 275);
        } else if(computerWinCondition) {
            console.log("computer gets a point");
            // add point to computer score
            setTimeout(_ => {
                resetBoard()
            }, 275);
        /*if all the board pieces have been placed
        and the win condition for the player and the computer
        have not been triggered theres a tie*/
        } else if(boardPiecesPlaced.length === boardPiecesAll.length && playerWinCondition === false && computerWinCondition === false) {
            console.log("there was a TIE!!!!")
            // add a point to tie
            resetboard()
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