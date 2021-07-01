import './style.scss';


import { initBoard } from "./modules/board";

initBoard();


/*TODO TIC-TAC-TOE(board 3x3)
1. build the board [X]
    - get what tile / board piece you on w/ class [X]
    EG: middle piece would be 2/2 2left  & 2 down

2. be able to place a token (O) onto the board [X]
    - know when it cant(a piece is already their)
    - when to end game when all board pieces have token on them

2.5 detect a win & add it to the correct player

3. create an AI [X]
- get all the board pieces w/ NO on them & randomly choose one [X]

4. create a win / tie / lose system

5. keep score
*/
