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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

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

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore > computerScore) {
    console.log(`You won ${humanScore} rounds while Computer only won ${computerScore}. You are the winner!`);
  } else if (humanScore < computerScore) {
    console.log(`Computer won ${computerScore} rounds while you only won ${humanScore}. Computer wins this time!`);
  } else {
    console.log(`You won ${humanScore} rounds but Computer also won ${computerScore} rounds. It's a Tie!`);
  }
}

playGame();