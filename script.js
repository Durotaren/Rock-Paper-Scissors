let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function getHumanChoice() {
  const humanInput = prompt('Rock, Paper or Scissors?', '').toLowerCase();
  if (humanInput === 'rock') {
    return 'Rock'
  } else if (humanInput === 'paper') {
    return 'Paper'
  } else if (humanInput === 'scissors') {
    return 'Scissors'
  }
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || 
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    console.log('You Win!');
  } else if (humanChoice === computerChoice) {
    console.log('Tie!');
  } else {
    computerScore++;
    console.log('You Lose!');};
}