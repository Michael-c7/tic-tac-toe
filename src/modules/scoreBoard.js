/*cache the DOM*/
let $scoreBoard = document.querySelector(".score-board");
let $scoreBoardPlayerScore = document.querySelector(".score-board__player-score");
let $scoreBoardTieScore = document.querySelector(".score-board__tie-score");
let $scoreBoardComputerScore = document.querySelector(".score-board__computer-score");

export let playerScore = 0;
export let computerScore = 0;
export let tieScore = 0;





export const scoreBoard = _ => {
    render()
}



export let setScore = (scoreRecipient, scoreAmt = 1) => {
    if(scoreRecipient === "player") {
        console.log("you got a player score!")
        playerScore + scoreAmt;
    } else if(scoreRecipient === "computer") {
        computerScore + scoreAmt;
    } else if(scoreRecipient === "tie") {
        tieScore + scoreAmt;
    } else {
        console.error("Invalid scoreRecipient, should be player, computer or tie");
    }
}



let setScoreInDOM = (DOMElement, scoreAmt) => {
    DOMElement.innerHTML = scoreAmt;
}



let render = _ => {
    setScoreInDOM($scoreBoardPlayerScore, playerScore);
    setScoreInDOM($scoreBoardTieScore, tieScore);
    setScoreInDOM($scoreBoardComputerScore, computerScore);
}



/*HOW TO
1. player wins a match, gets point [X]

2. this point is set to a player score variable

3. this player score variable is gets shown in the DOM

*/