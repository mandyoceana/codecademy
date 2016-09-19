var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if (computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
    console.log("Computer: " + computerChoice);
}

var compare = function(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            console.log ("The result is a tie!");
        } else if (userChoice === "rock") {
            if (computerChoice === "scissors")
                console.log ("User wins");
            else
                console.log ("Computer wins");
        } else if (userChoice === "paper") {
            if (computerChoice === "rock")
                console.log ("User wins");
            else 
                console.log ("Computer wins");
        } else {
        	if (computerChoice === "rock")
            	console.log ("Computer wins");
            else
            	console.log ("User wins");
        }
}

compare(userChoice, computerChoice);