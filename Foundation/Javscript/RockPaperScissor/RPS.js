const RPSArr = ["Rock", "Paper", "Scissor"];

function getRandomSelection(choices) {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
}

function playOne(RPSArr) {
  let playerSelection = getRandomSelection(RPSArr);
  let computerSelection = getRandomSelection(RPSArr);
}
