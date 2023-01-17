function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function resultRound (playerChoice, computerChoice) {
    
    let result = "" + playerChoice + computerChoice;

    switch (result) {   
        case "11": 
    break;
        case "12": scoreComputer++
    break;
        case "13": scorePlayer++
    break;
        case "21": scorePlayer++
    break;
        case "22": 
    break;
        case "23": scoreComputer++
    break;
        case "31": scoreComputer++
    break;
        case "32": scorePlayer++
    break;
        case "33": 
    break;
    
}
}

const buttons = document.querySelectorAll('button');

let scoreComputer=0;
let scorePlayer=0;
const scoringComputer = document.getElementById('pc');
const scoringPlayer = document.getElementById('hu');
const textAnnouncement = document.querySelector('.winner');
const announcementScreen = document.querySelector('.announcement');


buttons.forEach(button => 
    button.addEventListener("click", function() {
        const playerChoice = button.id;
        let computerChoice = getRndInteger(1,4);

        resultRound(playerChoice, computerChoice);
        
        scoringComputer.textContent = 'Score CPU: ' + scoreComputer;
        scoringPlayer.textContent = 'Score YOU: ' + scorePlayer;

        console.log("clicked");
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(scorePlayer);
        console.log(scoreComputer);

        if (scoreComputer == 5) {
            textAnnouncement.textContent = 'YOU LOST!';
            announcementScreen.style.cssText = 'visibility: visible; opacity: 1;';
            console.log("lost");
        }

        if (scorePlayer == 5) {
            textAnnouncement.textContent = 'YOU WON!';
            announcementScreen.style.cssText = 'visibility: visible; opacity: 1;';
            console.log("won");
        }
    }
));




