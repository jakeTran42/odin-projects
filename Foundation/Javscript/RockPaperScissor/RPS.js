const RPSArr = ["rock", "paper", "scissor"];

function getRandomSelection(choices) {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playOne(choices) {
  let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  let computerSelection = getRandomSelection(choices);

  if (playerSelection == computerSelection) {
    return "Draw";
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    return "Player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "Player";
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    return "Player";
  } else {
    return "Computer";
  }
}

function game(choices) {
  let playerScore = 0;
  let computerScore = 0;
  let scoreTracker = [];

  for (let i = 0; i < 5; i++) {
    let winner = playOne(choices);

    if (winner == "Draw") {
      playerScore++;
      computerScore++;
    } else if (winner == "Player") {
      playerScore++;
    } else {
      computerScore++;
    }

    scoreTracker.push(`Round ${i + 1}: ${winner}`);
  }

  if (playerScore > computerScore) {
    return `${scoreTracker} \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \nWinner: Player`;
  } else {
    return `${scoreTracker} \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore} \nWinner: Computer`;
  }
}

console.log(game(RPSArr));
