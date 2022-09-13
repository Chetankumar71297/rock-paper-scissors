// computer will make a random choice from rock,paper and scissors

function getComputerChoice() {
    choices = ["Rock","Paper","Scissors"]
    // get random index value
    const randomIndex = Math.floor(Math.random() * choices.length);

    // get random item
    const computer_guess = choices[randomIndex];

    return computer_guess;
}

// both variables are created to record number of wins by each
let computer_wins = 0;
let player_wins = 0;

// restart button is used to rest the scores and will appear when anyone wins
const restart = document.createElement('button');
restart.textContent = "Restart";
restart.addEventListener('click', () => reset());

const body = document.querySelector('body');

const buttons = document.querySelectorAll('button');

// this step will assign inner text of buttons to player_guess var.
buttons.forEach((btn) => {btn.addEventListener('click',() => player_choice(btn))});

function player_choice(btn) {
    let player_guess;
    player_guess = btn.innerHTML;
    if (computer_wins < 5 && player_wins < 5) {
        let computer_guess = getComputerChoice();
        let mid_result = playRound(player_guess, computer_guess);
        document.getElementById("demo1").textContent = mid_result;
        document.getElementById("demo2").textContent = `Your score: ${player_wins}  Computer score: ${computer_wins}`;
    }  
    
    if (computer_wins == 5) {
        document.getElementById("demo3").textContent = "You lost the game.Click restart to play again.";
        
        // Add restart button
        body.appendChild(restart);
    } 
    
    if (player_wins == 5) {
        document.getElementById("demo3").textContent = "You wins the game.Click restart to play again.";
        body.appendChild(restart);
    }
}
    // it will reset the score so that game can be played again
function reset(){    
    
        computer_wins = 0;
        player_wins = 0;
        body.removeChild(restart);
        document.getElementById("demo1").textContent = '';
        document.getElementById("demo2").textContent = `Your score: ${player_wins}  Computer score: ${computer_wins}`;
        document.getElementById("demo3").textContent = '';
}




// take user input as a string from rock,paper and scissors
// make a function which take computer guess and user guess as parameters to decide a winner
function playRound(player_guess, computer_guess) {
    
    // IGNORE THIS COMMENT!
    // player_guess = player_guess.charAt(0).toUpperCase() 
    //               + player_guess.slice(1).toLowerCase(); // convert ROCK,rock etc to Rock

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
   
  
// IGNORE THESE COMMENTS!
// Develop this game into 5 rounds,who wins most rounds will be the winner
// function game() {
    
//     for (let i = 0; i < 5; i++) {
//         let player_guess = prompt("Make your choice from rock,paper and scissors");
//         const computer_guess = getComputerChoice();
//         console.log(playRound(player_guess, computer_guess));
//     }
//         if (player_wins > computer_wins) {
//             console.log(`Hurry,you win's by ${player_wins-computer_wins} games out of 5 games!`);
//         } else if (player_wins < computer_wins) {
//             console.log(`You loose by ${computer_wins-player_wins} games out of 5 games`);
//         } else {
//             console.log(`Game Draw!! you and computer both wins equal games`);
//         }
    
// }


