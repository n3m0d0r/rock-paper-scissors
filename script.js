let getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*choices.length)];
  // returns random choice
}

let playRound = (playerSelection, computerSelection) => {
  //playerSelection = playerSelection.toLowerCase(); // make it case insensitive
  if (playerSelection === computerSelection) { return 'tie' }
  winners = {
    'paper': 'rock',
    'rock': 'scissors',
    'scissors': 'paper'
  }; // key beats value

  return winners[playerSelection] === computerSelection ? 'player' : 'computer';
}

let game = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const totalRounds = 5;
  let playerScore = 0;
  let computerScore = 0;

  for (let roundsLeft = totalRounds; roundsLeft > 0; roundsLeft--) {
    let playerSelection = prompt('please pick rock, paper or scissors: ');
    while(!choices.includes(playerSelection.toLowerCase())) {
      playerSelection = prompt('invalid choice. enter rock, paper or scissors!');
    }
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    switch (result) {
      case 'tie':
        console.log(`you both played ${playerSelection}, it's a tie!`);
        break;
      case 'player':
        playerScore++;
        console.log(`you won! ${playerSelection} beats ${computerSelection}`);
        break;
      case 'computer':
        computerScore++;
        console.log(`you lost! ${computerSelection} beats ${playerSelection}`);
        break
    }
  }

  finalScore = `final results:\nyou -> ${playerScore}\ncomputer -> ${computerScore}`;
  finalMessage = playerScore > computerScore ? 'YOU WON' : 
    playerScore < computerScore ? 'YOU LOST' :
    "IT'S A TIE!";
  console.log(`${finalScore}\n${finalMessage} THE GAME!`);
}

game();

