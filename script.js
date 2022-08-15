// computer will make a random choice from rock,paper and scissors

function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"]
    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const computer_guess = choices[randomIndex];

    return computer_guess;
}
let computer_wins = 0;
let player_wins = 0;
// take user input as a string from rock,paper and scissors
// make a function which take computer guess and user guess as parameters to decide a winner
function playRound(player_guess, computer_guess) {
    // both variables are created to record number of wins by each
    
    player_guess = player_guess.charAt(0).toUpperCase() 
                   + player_guess.slice(1).toLowerCase(); // convert ROCK,rock etc to Rock

    // if (computer_guess == user_guess)--> It's a tie
    if (computer_guess == player_guess) {
        const round_result = "It's a tie";
        return round_result;
    } else if ((computer_guess=="Rock" && player_guess =="Scissors") || (computer_guess=="Paper" && player_guess=="Rock") || (computer_guess=="Scissors" && player_guess=="Paper")) {
        const round_result = `You Lose! ${computer_guess} beats ${player_guess}`;
        computer_wins += 1;
        return round_result;
    } else {
        const round_result = `You Win! ${computer_guess} got beaten by ${player_guess}`;
        player_wins += 1;
        return round_result;
    }
    // if (computer_guess=rock and user_guess=scissors) or (computer_guess=paper and user_guess=rock) or (computer_guess=scissors and user_guess=paper))--> computer wins
    // else --> user wins
  }
   
  //let player_guess = "PAPER";
  //
  //console.log(computer_guess);
  

// Develop this game into 5 rounds,who wins most rounds will be the winner
function game() {
    
    for (let i = 0; i < 5; i++) {
        let player_guess = prompt("Make your choice from rock,paper and scissors");
        const computer_guess = getComputerChoice();
        console.log(playRound(player_guess, computer_guess));
    }
        if (player_wins > computer_wins) {
            console.log(`Hurry,you win's by ${player_wins-computer_wins} games out of 5 games!`);
        } else if (player_wins < computer_wins) {
            console.log(`You loose by ${computer_wins-player_wins} games out of 5 games`);
        } else {
            console.log(`Game Draw!! you and computer both wins equal games`);
        }
    
}


