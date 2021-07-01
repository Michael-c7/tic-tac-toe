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



/*how to determine a win*/

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

    know who gets the point based on what class the win pattern has
    */


    /*middle tile indexes(from 0) are 1, 4, 7*/

    /*
    - For middle tiles win situations
    1. 0 1 0 (left to right / right to left)
    2.0 (top to bottom / bottom to top)
      1
      0
    */

    /*
    - for non middle tile win situations
    1. 1 0 0 (left to right)
    2. 0 0 1 (right to left)

    3. 1 (top to bottom)
       0
       0

    4. 0 (bottom to top)
       0
       1
    */