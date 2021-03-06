'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

//javascript method giv you a random number 1 -10
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

//function expression inside event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //boolean
  //!guess = 0, it's falsy value
  if (!guess) {
    //When there is no input
    displayMessage('⛔️ No secretNumber');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
    //   document.querySelector('.message').textContent =
    //     guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
     displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
    //   document.querySelector('.message').textContent = '🎇 You lost the game!';
      displayMessage('🎇 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});


//     When guess is too high
//   }else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score = score - 1;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🎇 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     //When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '🎇 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }


document.querySelector('.again').addEventListener('click', function() {
    score = 20
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?'
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = ""
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
