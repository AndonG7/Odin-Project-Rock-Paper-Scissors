function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getComputerChoice(){
    return getRndInteger(1, 4); 
}

let scoreClient = 0;
let scoreComputer = 0;

alert("You are going to play 5 rounds of Rock Paper Scissors with the computer");

for (let i=0; i<4; i++) {
let computerChoice = getComputerChoice();
let clientChoice = prompt("Enter Rock, Paper or Scissors: ");
let clientChoiceNum;
let result;


clientChoice = clientChoice.toLowerCase();

switch (clientChoice) {
    case "rock": clientChoiceNum=1
    break;
    case "paper": clientChoiceNum=2;
    break;
    case "scissors": clientChoiceNum=3;
    break;
    default: alert ("WRONG INPUT! Won't count. You get 1 less chance.")
    break;
}

result = "" + clientChoiceNum + computerChoice;

switch (result) {
    case "11": alert("It's a tie")
    break;
    case "12": alert("You lost, paper wins"); scoreComputer++
    break;
    case "13": alert("You won, scissors loses"); scoreClient++
    break;
    case "21": alert("You won, rock loses"); scoreClient++
    break;
    case "22": alert("It's a tie")
    break;
    case "23": alert("You lost, scissors wins"); scoreComputer++
    break;
    case "31": alert("You lost, rock wins"); scoreComputer++
    break;
    case "32": alert("You won, paper loses"); scoreClient++
    break;
    case "33": alert("It's a tie")
    break;
    
}
}

if (scoreClient === scoreComputer ) {
    alert ("It's a tie. :)");
} else if (scoreClient > scoreComputer) {
    alert ("Congradulations! You WON");
} else if (scoreComputer > scoreClient) {
    alert ("Sadly, you lost.");
}

console.log("Your score is: " + scoreClient);
console.log("Computer score is: " + scoreComputer);