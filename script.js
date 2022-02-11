//generate random number between 0-9
//if number is 0,1,2,3 - rock
//if number is 4,5,6 - paper
//if number is 7,8,9 - scissors

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*10);
    let computerChoice = "";

    if (randomNumber <= 3) {
        computerChoice = "rock";
    } else if (randomNumber >= 7) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

//Make variable for playerselection and computerselection
//Implement rules of roshambo: rock beats scissors, rock gets beaten by paper...
//return the winner

function playRound(playerSelection, computerSelection) {
    let result = "";
    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "It's a Draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        result = "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result = "It's a Draw!";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You Win!";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        result = "You Lose!";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        result = "It's a Draw!";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        result = "You Lose!";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        result = "You Win!";
    } else {
        result = "Please choose rock, paper or scissors!";
    }
    return result;
}

//5 rounds game, keep score, report winner or loser at the end

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let result = "";


    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("This is roshambo. Round: " + (i+1) + ".\nPlease, make your pick: ", "");
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result == "You Win!") {
            console.log("You have won this round");
            playerScore = playerScore + 1; //playerScore += 1;
        } else if (result == "You Lose!") {
            console.log("You have lost this round");
            computerScore = computerScore + 1; //computerScore +=1;
        } else {
            console.log("Draw! Score stays: \n" + playerScore + " - " + computerScore);
        }
        console.log(playerScore + " - " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You have won! \nFinal score is: " + playerScore + " - " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You have lost! \nFinal score is: " + playerScore + " - " + computerScore);
    } else {
        console.log("It's a Draw! \nFinal score: " + playerScore + " - " + computerScore);
    }
    
}

console.log(game());