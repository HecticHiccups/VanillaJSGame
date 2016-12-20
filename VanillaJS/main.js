/* Function Starting the Game */
function startGame() {
    
/* iterating throough different ID's & Clearing the innerText */
    for(var i=1; i <=9; i++){
        clearBox(i); /* Calling clearBox function passing i */
    }
    
    //Global Object 
    document.turn = 'X';
    document.winner = null;
     /* calling function that sets a message*/
    setMessage(document.turn + " gets to start the Game!");
}
 
/* Function that sets Message is being defined*/
function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}


/* function that detects the next move takes in 1 parameter */
function nextMove(square) {
 /* logic determining if there already is a winner then output a message */
    if (document.winner != null) {
        setMessage(document.turn + ' already won.')
 /*logic determining if the innerText of the element is empty and if the curr value is document.turn then switch*/
    } else if (square.innerText == '') {
        square.innerText = document.turn;
        switchTurn();
    } else { 
        /* in any other case tell the user to pick another square */
        setMessage('Pick another Square');
    }

}

function switchTurn() {

    if (checkWin(document.turn)) {
        setMessage("Congrats " + document.turn + "!, You Won!")
        document.winner = document.turn;
    } else if (document.turn == "X") {
        document.turn = 'O';
        setMessage('Its ' + document.turn + "'s turn.");
    } else {
        document.turn = 'X';
        setMessage('Its ' + document.turn + "'s turn.");
    }
}


function checkWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(2, 5, 8, move)) {
        result = true;
    }
    return result;
}


function checkRow(a, b, c, move) {

    var result = false;
    if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
        result = true;
    }
    return result;
}

function getBox(num) {

    return document.getElementById("s" + num).innerText;

}

function clearBox(num){
    
    document.getElementById("s" + num).innerText = '';
}