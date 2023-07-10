
let randomNum;
let score;
let highscore;

function changeMsg(msg) {
  document.getElementById('message').textContent = msg;
}

function resetGame() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  score = 10;
  highscore = 0;
  changeMsg('');
  document.getElementById('score').textContent = score;
  document.getElementById('highscore').textContent = highscore;
  document.getElementById('submit-button').disabled = false;
  document.getElementById('guess-input').disabled = false;
  document.body.style.backgroundColor = '#f5f5f5';
}


document.getElementById('submit-button').addEventListener('click', function () {
  const inputUser = parseInt(document.getElementById('guess-input').value);

  if (isNaN(inputUser) || inputUser < 1 || inputUser > 100) {
    changeMsg('Please enter a valid number');
  } else if (inputUser === randomNum) {
    changeMsg('Congratulations! You guessed the correct number!');
    document.body.style.backgroundColor = 'green';
    document.getElementById('submit-button').disabled = true;
    document.getElementById('guess-input').disabled = true;
    highscore = Math.max(score, highscore);
    document.getElementById('highscore').textContent = highscore;
  } else {
    if (score === 1) {
      changeMsg('You lost! Please try again.');
      document.getElementById('submit-button').disabled = true;
      document.getElementById('guess-input').disabled = true;
      document.body.style.backgroundColor = 'red';
    } else {
      if (inputUser > randomNum) {
        changeMsg('Too high!');
      } else {
        changeMsg('Too low!');
      }
      score--;
      document.getElementById('score').textContent = score;
    }
  }
});


document.getElementById('play-button').addEventListener('click', function () {
  resetGame();
});


document.getElementById('play-again-button').addEventListener('click', function () {
  resetGame();
});

resetGame();
