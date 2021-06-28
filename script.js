'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23;

//javascript method giv you a random number 1 -10
const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;

//function expression inside event listener 
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)

    //boolean
    //!guess = 0, it's falsy value 
    if(!guess) {
        document.querySelector('.message').textContent = '⛔️ No secretNumber';
    } else if (guess === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number!';
    }
})
