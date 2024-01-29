let randomnumber = parseInt(Math.random() *100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener('click', function(e) {
    e.preventDefault();
   const guess = parseInt(userInput.value);
   console.log(guess)
   validateGuess(guess);

  })
}

function validateGuess(guess){

  if(isNaN(guess)){
    alert('please enter a valid number')
  }
  else if(guess < 1){
    alert('please enter a number more than 1')
  }
  else if(guess > 100){
    alert('please enter a number less than 100')
  }
  else{
    prevGuess.push(guess)
  }
  if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over. Random number was ${randomnumber}`)
    endGame()
  }
  else{
    displayGuess(guess)
    checkGuess(guess)
  }
}

function checkGuess(guess){

  if(guess === randomnumber){
    displayMessage(`You guessed it right`)
  } 
  else if (guess < randomnumber){
    displayMessage(`number is low`)
  }
  else if (guess > randomnumber){
    displayMessage(`number is high`)
  }

}

function displayGuess(guess){
  userInput.value = ''
  guessslot.innerHTML += `${guess} `
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
  console.log(`${11 - numGuess}`)

}


function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h1 id='newGame'>Start New Game</h1>`;
  
  startOver.appendChild(p)
  playGame = false;
  newGame()
}


function newGame(){
 const newGameButton = document.querySelector('#newGame')
 newGameButton.addEventListener('click' , function(e) {
  
  let randomnumber = parseInt(Math.random() *100 + 1)
  prevGuess = []
  numGuess = 1
  guessslot.innerHTML = ''
  remaining.innerHTML = `${11 - numGuess}`
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)


  playGame = true
 })
}


