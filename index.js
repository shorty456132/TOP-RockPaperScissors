
let RPS = ["rock","paper","scissors"];
let inputCheck = false;
const computerSelection = computerPlay();

let playerInput = prompt("type a selection. rock, paper, or scissors","").toLowerCase();

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

function playGame(computerSelection,playerInput) {
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



checkPlayerInput(playerInput);

if(inputCheck = true)
{
    console.log("computer has " + computerSelection + ". you have " + playerInput );
    console.log(playGame(computerSelection,playerInput));
    playerInput = false;
}



