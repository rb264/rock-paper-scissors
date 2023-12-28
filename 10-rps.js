let score = JSON.parse(localStorage.getItem
  ('score')) ||{
      win: 0,
      loss: 0,
      tie: 0
    }; 

  updateScoreElement();
  
 
  function playGame(playerMove){
  pickComputerMove();
  let result ='';
  if (playerMove === 'scissors'){
    if (computerMove === 'rock'){
    result = 'You lose!';
  }else if(computerMove === 'paper'){
    result = 'You win!'
  }else if (computerMove === 'scissors'){
    result = 'Tie!';
  }
  }
  
  else if(playerMove === 'paper'){
    if (computerMove === 'rock'){
    result = 'You win!';
  }else if(computerMove === 'paper'){
    result = 'Tie!'
  }else if (computerMove === 'scissors'){
    result = 'You lose!';
  }
  }

  else if(playerMove === 'rock'){
    if (computerMove === 'rock'){
    result = 'Tie!';
  }else if(computerMove === 'paper'){
    result = 'You lose!'
  }else if (computerMove === 'scissors'){
    result = 'You win!';
  }
  }

  if(result === 'You win!'){
    score.win += 1;
  }else if (result === 'You lose!'){
    score.loss += 1;
  }else if (result === 'Tie!'){
    score.tie += 1;
  }
  localStorage.setItem('score',JSON.stringify      (score));

  updateScoreElement();
  
  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = ` you 
<img src="images/${playerMove}.png" class="move-icon">
<img src="images/${computerMove}.png" class="move-icon">
computer`;
  
  }

  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.win}, losses: ${score.loss}, Ties: ${score.tie}`
  }

  let computerMove = '';
  function pickComputerMove(){
  const randomNumber = Math.random();

  if(randomNumber >=0 && randomNumber < 1/3){
    computerMove = 'rock';
  } else if(randomNumber >= 1/3 && randomNumber< 2/3){
    computerMove ='paper';
  } else if(randomNumber >= 2/3 && randomNumber < 1){
    computerMove ='scissors';
  }
  }

  
  document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
      playGame('rock');
    }else if (event.key === 'p'){
      playGame('paper');
    }else if (event.key === 's'){
      playGame('scissors');

    }
  });