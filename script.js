// return randomly chosen string rock, paper, scissors
function getComputerChoice() {
    let value = Math.random();
    if (value < 0.33333) {
        return "rock";
    }
    // implied greater than 0.3333 due to else
    else if (value < 0.6666) {
        return "paper";
    }
    // implied greater than 0.6666 due to else
    else {
        return "scissors";
    }
}

// input r p or s for rock paper or scissors
function getHumanChoice() {
    let choice;
    let keepGoing = true;
    while (keepGoing) {
        // ask choice, make lower case for easier checking
        choice = prompt("Choose Rock (r), Paper (p), or Scissors (s)").toLowerCase();
        // check if valid, or ask again
        if (choice === "r" || choice === "p" || choice === "s") {
            keepGoing = false;
        }
    }
    // return full word
    return (choice === "r") ? "rock" : (choice === "p") ? "paper" : "scissors"
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    let outcome;
    let outcomeMsg;
    switch(humanChoice) {
        // human chose rock
        case "rock":
            outcome = (computerChoice==="rock") ? "tie" : (computerChoice==="paper") ? "lose" : "win";
            break;
        // human chose paper
        case "paper":
            outcome = (computerChoice==="rock") ? "win" : (computerChoice==="paper") ? "tie" : "lose";
            break;
        // human chose scissors
        case "scissors":
            outcome = (computerChoice==="rock") ? "lose" : (computerChoice==="paper") ? "win" : "tie";
            break;
    }

    switch (outcome) {
        case "win":
            outcomeMsg = `Win! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
            humanScore++;
            break;

        case "lose":
            outcomeMsg = `Lose! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}`;
            computerScore++;
            break;

        case "tie":
            outcomeMsg = "Tie! No winner this time!";
            break;
    }

    console.log(outcomeMsg);
}

function playGame() {

    let outcomeMsg;

    for (let i = 0; i<5; i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }
    
    if (humanScore > computerScore) {
        outcomeMsg = "Rockstar! You defeated the computer.";
    }
    else if (humanScore < computerScore) {
        outcomeMsg = "Sad times! You sorely lost to the computer.";
    }
    else {
        outcomeMsg = "Well... That was a total tie. Better than losing?";
    }

    console.log(outcomeMsg);
}

playGame();