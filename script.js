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


// containers and divs to show current game and running score
const container = document.querySelector("body");
const content = document.createElement("div");              //Result of 1 game
const contentScore = document.createElement("div");         //Running score
const winner = document.createElement("div");               //Winner of five games
const notes = document.createElement("div");                //Starting new Game
container.appendChild(content);
container.appendChild(contentScore);
container.appendChild(winner);
container.appendChild(notes);
let pScore = 0;
let cScore = 0;

content.style.cssText = "margin-top: 50px"                  //pushing the text down
winner.style.cssText = "margin-top: 10px; font-weight: 900"
notes.style.cssText = "margin-top: 25px"


//buttons play games
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        winner.textContent = "";
        notes.textContent = "";
        content.textContent = playRound(button.textContent.toLowerCase(), computerPlay());
        if (content.textContent == "You Win!") {
            pScore = pScore + 1; // pScore += 1;
        } else if (content.textContent == "You Lose!") {
            cScore = cScore + 1; // cScore += 1;
        }
        contentScore.textContent = "You: " + pScore + " vs. Computer: " + cScore;
        if (pScore == 5) {
            winner.textContent = "The Winner is: You";
            pScore = 0;
            cScore = 0;
            notes.textContent = "Starting a New Game!";
        } else if (cScore == 5) {
            winner.textContent = "The Winner is: Computer";
            pScore = 0;
            cScore = 0;
            notes.textContent = "Starting a New Game!";
        }
    });
});


