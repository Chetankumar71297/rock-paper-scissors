// computer will make a random choice from rock,paper and scissors

function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"]
    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const computer_guess = choices[randomIndex];

    return computer_guess;
}

// take user input as a string from rock,paper and scissors
// make a function which take computer guess and user guess as parameters to decide a winner
function playRound(player_guess, computer_guess) {
    
    player_guess = player_guess.charAt(0).toUpperCase() 
                   + player_guess.slice(1).toLowerCase(); // convert ROCK,rock etc to Rock

    // if (computer_guess == user_guess)--> It's a tie
    if (computer_guess == player_guess) {
        const round_result = "It's a tie";
        return round_result;
    } else if ((computer_guess=="Rock" && player_guess =="Scissors") || (computer_guess=="Paper" && player_guess=="Rock") || (computer_guess=="Scissors" && player_guess=="Paper")) {
        const round_result = `You Lose! ${computer_guess} beats ${player_guess}`;
        return round_result;
    } else {
        const round_result = `You Win! ${computer_guess} got beaten by ${player_guess}`;
        return round_result;
    }
    // if (computer_guess=rock and user_guess=scissors) or (computer_guess=paper and user_guess=rock) or (computer_guess=scissors and user_guess=paper))--> computer wins
    // else --> user wins
  }
   
  //let player_guess = "PAPER";
  //const computer_guess = getComputerChoice();
  //console.log(computer_guess);
  //console.log(playRound(player_guess, computer_guess));




