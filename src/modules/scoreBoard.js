/*cache the DOM*/
let $scoreBoardPlayerScore = document.querySelector(".score-board__player-score");
let $scoreBoardTieScore = document.querySelector(".score-board__tie-score");
let $scoreBoardComputerScore = document.querySelector(".score-board__computer-score");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;





export let initScoreBoard = _ => {
    $scoreBoardPlayerScore.innerHTML = playerScore;
    $scoreBoardTieScore.innerHTML = tieScore;
    $scoreBoardComputerScore.innerHTML = computerScore;
}



export let setScore = (scoreRecipient) => {
    if(scoreRecipient === "player") {
        playerScore++;
    } else if(scoreRecipient === "computer") {
        computerScore++;
    } else if(scoreRecipient === "tie") {
        tieScore++;
    } else {
        console.error(`Invalid argument for scoreRecipient,
        It should either be player, computer or tie`);
    }

    render()
}



let render = _ => {
    $scoreBoardPlayerScore.innerHTML = playerScore;
    $scoreBoardTieScore.innerHTML = tieScore;
    $scoreBoardComputerScore.innerHTML = computerScore;
}