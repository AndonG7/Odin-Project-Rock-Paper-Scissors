function winner (scoreComputer, scorePlayer) {
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