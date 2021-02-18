'use strict';

/* console.log(document.querySelector('.message').textContent);
 */
// DOM and DOM Manipulation
// DOM - Document Object Model
// structured representation of HTML documents that allows
// JavaScript to access HTML elements and styles to manipulate
// them

/* document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 16;
document.querySelector('.guess').value = 23; */

// Define random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handling Click Events
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //console.log(typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    this.disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When player is wrong
    // When guess is too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'The guess is too high!'
          : 'The guess is too low!'
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } // When player loses
    else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // When player loses
  }

  // When guess is too low
  /*else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'The guess is too low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } */
});

// Reset the game by clicking Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
