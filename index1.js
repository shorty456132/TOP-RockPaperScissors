
let RPS = ["rock","paper","scissors"];
let Round = 0;
let yourScore = 0;
let compScore = 0;



function resetScores() {
    yourScore = 0;
    compScore = 0;
}

function computerPlay() {
    return RPS[Math.floor(Math.random()*RPS.length)];
}
function checkPlayerInput(playerInput) {
    for(let i = 0; i <= 2; i++)
    {
        if(playerInput == RPS[i]) {
            inputCheck = true;
            return;
        }
    }
    if(inputCheck = false) {
        return "you didnt enter the correct info."
    }
}

function calculateResult(computerSelection,playerInput) {
    let result = "";

    switch(computerSelection) {
        case "rock": {
            switch(playerInput) {
                case "rock": result = "tie"; break;
                case "paper": result = "you win! paper covers rock"; break;
                case "scissors": result  = "you lose. rock crushes scissors"; break;
            }
            return result;
        }
        case "paper": {
            switch(playerInput) {
                case "rock": result = "you lose. paper covers rock"; break;
                case "paper": result = "tie"; break;
                case "scissors": result  = "you win! scissors cut paper"; break;
            }
            return result;
        }
        case "scissors": {
            switch(playerInput) {
                case "rock": result = "you win! rock crushes scissors"; break;
                case "paper": result = "you lose. scissors cut paper"; break;
                case "scissors": result  = "tie"; break;
            }
            return result;
        }
    }
}

function playRound() {
    let inputCheck = false;
    let Roundresult = "";

    let playerInput = prompt("type a selection. rock, paper, or scissors","").toLowerCase(); 
    checkPlayerInput(playerInput);
    if(inputCheck = true) {
        let computerSelection = computerPlay();
        console.log("computer has " + computerSelection + ". you have " + playerInput );

        Roundresult = calculateResult(computerSelection,playerInput)
        playerInput = false;
    }
    return Roundresult;

}

function playGame() {

    
    do {
        roundWinner = playRound();
        if(roundWinner.search("win") > -1) {
            yourScore += 1;
        } else {
            compScore += 1;
        }
        
        if(yourScore == 5)
        {
            console.log("Congradulations, you win!");
            resetScores();
        } else if (compScore == 5) {
            console.log("sorry you lose it all... you suck.");
            resetScores();
        }
        
        console.log(roundWinner);
        Round += 1;
    } while (Round <= 5);
}

playGame();




