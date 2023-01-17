const buttons = document.querySelectorAll('button');

let scoreComputer=0;
let scorePlayer=0;
const scoringComputer = document.getElementById('pc');
const scoringPlayer = document.getElementById('hu');
const textAnnouncement = document.querySelector('.winner');
const announcementScreen = document.querySelector('.announcement');
const roundWinnerScreen = document.querySelector('.roundWinner');
const textRoundWinner = document.querySelector('.winnerRound');
const continueText = document.querySelector('#continue');
const reasonText = document.querySelector('.reason');


buttons.forEach(button => 
    button.addEventListener("click", function() {
        const playerChoice = button.id;
        let computerChoice = getRndInteger(1,4);
        let resultRoundWinner = resultRound(playerChoice, computerChoice);

        scoringComputer.textContent = 'Score CPU: ' + scoreComputer;
        scoringPlayer.textContent = 'Score YOU: ' + scorePlayer;

        buttonsLogs(playerChoice, computerChoice, scorePlayer, scoreComputer);

        roundWinner(resultRoundWinner);

        winner(scoreComputer, scorePlayer);
    }

    
));



