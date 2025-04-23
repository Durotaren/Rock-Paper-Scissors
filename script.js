function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return 'Rock';
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
};

const body = document.body;
const resultsDiv = document.createElement('div');
body.append(resultsDiv);  

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || 
    (humanChoice === 'Paper' && computerChoice === 'Rock') ||
    (humanChoice === 'Scissors' && computerChoice === 'Paper')
  ) {
    humanScore++;
    } else if (humanChoice === computerChoice) {
    console.log('Tie!');
  } else {
    computerScore++;
  };

  resultsDiv.innerHTML = `Your Score is: ${humanScore} <br> Computer's score is: ${computerScore}`;

  if (humanScore === 5) {
    alert('You Win!');
  } else if (computerScore === 5) {
    alert('You Lose');
  };
};

let rock = document.querySelector('#rock');
rock.addEventListener('click', () => playRound('Rock', getComputerChoice()));

let paper = document.querySelector('#paper');
paper.addEventListener('click', () => playRound('Paper', getComputerChoice()));

let scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => playRound('Scissors', getComputerChoice()));