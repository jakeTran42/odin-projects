const RPSArr = ["rock", "paper", "scissor"];

function getRandomSelection(choices) {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playOne(choices) {
  let playerSelection = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
  let computerSelection = getRandomSelection(choices);

  console.log(playerSelection, computerSelection)

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

console.log(playOne(RPSArr));
