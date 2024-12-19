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

function getHumanChoice() {

}

