function resultRound (playerChoice, computerChoice) {
    
    let result = "" + playerChoice + computerChoice;

    switch (result) {   
        case "11": reasonText.textContent = 'CPU chose rock!';                      return 3; 
    break;
        case "12": reasonText.textContent = 'CPU chose paper!'; scoreComputer++;    return 2;
    break;
        case "13": reasonText.textContent = 'CPU chose scissors!'; scorePlayer++;   return 1;
    break;
        case "21": reasonText.textContent = 'CPU chose rock!'; scorePlayer++;       return 1;
    break;
        case "22": reasonText.textContent = 'CPU chose paper!';                     return 3; 
    break;
        case "23": reasonText.textContent = 'CPU chose scissors!'; scoreComputer++; return 2; 
    break;
        case "31": reasonText.textContent = 'CPU chose rock!'; scoreComputer++;     return 2; 
    break;
        case "32": reasonText.textContent = 'CPU chose paper!'; scorePlayer++;      return 1; 
    break;
        case "33": reasonText.textContent = 'CPU chose scissors!';                  return 3; 
    break;
    
}
}