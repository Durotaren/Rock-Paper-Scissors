const humanScore = 0;
const computerScore = 0;

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
  const HumanChoice = prompt('Which move would you like to select?', '');
  if (HumanChoice === 'Rock') {
    return 'Rock'
  } else if (HumanChoice === 'Paper') {
    return 'Paper'
  } else if (HumanChoice === 'Scissors') {
    return 'Scissors'
  }
}
