function roundWinner (resultRoundWinner) {
    if (resultRoundWinner == 3) {
        textRoundWinner.textContent = 'IT IS A TIE';
        roundWinnerScreen.style.cssText = 'visibility: visible; opacity: 1;';
        console.log("tie");
    }

    if (resultRoundWinner == 2) {
        textRoundWinner.textContent = 'YOU LOST THIS ROUND';
        roundWinnerScreen.style.cssText = 'visibility: visible; opacity: 1;';
        console.log("you lost this round");
    }

    if (resultRoundWinner == 1) {
        textRoundWinner.textContent = 'YOU WON THIS ROUND';
        roundWinnerScreen.style.cssText = 'visibility: visible; opacity: 1;';
        console.log("you won this round");
    }

    continueText.addEventListener("click", function(){
        roundWinnerScreen.style.cssText = 'opacity: 0; visibility: hidden;';
    });

}