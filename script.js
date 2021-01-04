const rgbColor = document.getElementById('rgb-color');
const balls = document.getElementsByClassName('ball');
const colorGuess = document.getElementById('colors');
const answer = document.getElementById('answer');
const resetBtn = document.getElementById('reset-game');
const scoreBoard = document.getElementById('score');

function randomColor() {
  let rgb = 'rgb(';
  const red = Math.ceil(Math.random() * 255);
  const green = Math.ceil(Math.random() * 255);
  const blue = Math.ceil(Math.random() * 255);
  rgb += `${red}, ${green}, ${blue})`;
  return rgb;
}

function colorFill() {
  rgbColor.innerText = randomColor().split('rgb')[1];
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = randomColor();
  }
  balls[Math.ceil((Math.random() * balls.length)) - 1].style.backgroundColor = `rgb${rgbColor.innerText}`;
}

colorFill();

function scoreUpdate(points) {
  let score = parseInt(scoreBoard.innerText.split(' ')[1], 10);
  score += points;
  if (score >= 0) {
    scoreBoard.innerText = `Placar: ${score}`;
  } else {
    scoreBoard.innerText = 'Placar: 0';
  }
}

function checkAnswer(event) {
  if (event.target.style.backgroundColor === `rgb${rgbColor.innerText}`) {
    answer.innerText = 'Acertou!';
    scoreUpdate(3);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
    scoreUpdate(-1);
  }
}

colorGuess.addEventListener('click', checkAnswer);

function reset() {
  colorFill();
  answer.innerText = 'Escolha uma cor';
}

resetBtn.addEventListener('click', reset);
