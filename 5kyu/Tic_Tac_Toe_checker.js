function isSolved(board) {
  // TODO: Check if the board is solved!
    let state;
    let draw = 0;
    let x=0;
    let o=0;
    for(i=0;i<3;i++) {
        let x=0;
        let o=0;
        for(j=0;j<3;j++) {
            if(board[i][j] === 1) {
                x++;
            } else if(board[i][j] === 2) {
                o++;
            } else {
                draw++;
            }
        }
        if(x===3) {
            state=1;
            break;
        }
        if(o===3) {
            state=2;
            break;
        }      
    }  

    for(j=0;j<3;j++) {
        let x=0;
        let o=0;
        for(i=0;i<3;i++) {
            if(board[i][j] === 1) {
                x++;
            } else if(board[i][j] === 2) {
                o++;
            } else {
                draw++;
            }
        }
        if(x===3) {
            state=1;
            break;
        }
        if(o===3) {
            state=2;
            break;
        }      
    }

    let jInc = 0;
    for(i=0;i<3;i++) {

        if(board[i][jInc] === 1) {
            x++;
        } else if(board[i][jInc] === 2) {
            o++;
        } else {
            draw++;
        }
        jInc++;
    }
  
   if(x===3) {
        state=1;
    }
    if(o===3) {
        state=2;
    }  
    x=0;
    o=0;

    let iInc = 0;
    for(j=2;j>=0;j--) {
        if(board[iInc][j] === 1) {
            x++;
        } else if(board[iInc][j] === 2) {
            o++;
        } else {
            draw++;
        }
        iInc++;
    }
  
    if(x===3) {
        state=1;
    }
    if(o===3) {
        state=2;
    } 

    if(!state && draw != 0)
        return -1;
    else if(!state)
        return 0;
        
    return state;
}