const app = document.querySelector('#app');
const choices = ['rock', 'paper', 'scissors'];
const resultsDiv = document.createElement('div');
const roundsDiv = document.createElement('div');
const scoreDiv = document.createElement('div');

const pointsToWin = 5;
const initialRound = 1;
let currentRound = initialRound;
let playerPoints = 0;
let computerPoints = 0;

roundsDiv.textContent = `ROUND ${currentRound}`;
scoreDiv.textContent = `YOU ${playerPoints} x ${computerPoints} COMPUTER `;
app.appendChild(roundsDiv);
app.appendChild(scoreDiv);

choices.forEach(choice => {
  let btn = document.createElement('button');
  btn.classList.add(`${choice}-button`);
  btn.textContent = choice;
  btn.addEventListener('click', () => {
    playerChoice = choice;
    computerChoice = getComputerChoice();
    winner = playRound(playerChoice, computerChoice);
    if (winner === 'player') {
      playerPoints++;
    } else if (winner === 'computer') {
      computerPoints++;
    }
    updateRounds();
    updateScore();
    if (playerPoints === pointsToWin) {
      endGame('player');
      return;
    } else if (computerPoints === pointsToWin) {
      endGame('computer');
      return;
    }
  });
  app.appendChild(btn);
});

app.appendChild(resultsDiv);

function updateScore() {
  scoreDiv.textContent = `YOU ${playerPoints} x ${computerPoints} COMPUTER `;
}

function endGame(winner) {
  resultsDiv.textContent = winner === 'player' ? 'CONGRATS, YOU WON THE GAME!' : 'YOU LOST THE GAME!';
  currentRound = 0;
  updateRounds();
  playerPoints = 0;
  computerPoints = 0;
}

function updateRounds() {
  currentRound++;
  roundsDiv.textContent = `ROUND ${currentRound}`;
}

function getComputerChoice() {
  return choices[Math.floor(Math.random()*choices.length)];
  // returns random choice
}

function playRound(playerSelection, computerSelection) {
  //playerSelection = playerSelection.toLowerCase(); // make it case insensitive
  if (playerSelection === computerSelection) { 
    displayResult('tie', playerSelection);
    return;
  }
  winners = {
    'paper': 'rock',
    'rock': 'scissors',
    'scissors': 'paper'
  }; // key beats value

  winner = winners[playerSelection] === computerSelection ? 'player' : 'computer';
  displayResult(winner, playerSelection, computerSelection);
  return winner;
}

function displayResult(result, playerSelection = null, computerSelection = null) {
  let message = '';
  switch (result) {
    case 'tie':
      message = `you both played ${playerSelection}, it's a tie!`;
      break;
    case 'player':
      message = `you won! ${playerSelection} beats ${computerSelection}`;
      break;
    case 'computer':
      message = `you lost! ${computerSelection} beats ${playerSelection}`;
      break;
    default:
      message = 'error...';
  }
  resultsDiv.textContent = message;
}

