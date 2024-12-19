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

