const getUserChoice = userInput => 
{
  userInput = userInput.toLowerCase();
  if(((userInput === 'rock') || (userInput === 'paper')) || (userInput === 'scissors'))
  {
    return userInput;
  }else{
    return userInput = 'Error'
  }
};

const getComputerChoice =  function ()
{
  var number = Math.floor(Math.random()*3);
  var Decision = null;
  switch(number)
  {
    case 0:
      Decision = getUserChoice('rock');
      break;
    case 1:
      Decision = getUserChoice('paper');
      break;
    case 2:
      Decision = getUserChoice('scissors');
      break;
    default:
      console.log('Error');
  }
  return Decision;
}

function determineWinner(User = getUserChoice(getComputerChoice()), Computer = getComputerChoice())
{
  if ((((User === 'rock') && (Computer === 'scissors')) || 
     ((User === 'paper') && (Computer === 'rock'))) ||
     ((User === 'scissors') && (Computer === 'paper')))
     {
       return 'User is winner';
     }
    else if 
    ((((Computer === 'rock') && (User === 'scissors')) || 
     ((Computer === 'paper') && (User === 'rock'))) ||
     ((Computer === 'scissors') && (User === 'paper')))
     {
       return 'Computer is winner';
     }
     else
     {
       return 'The game is a tie';
     }
}
function PlayGame()
{
  var UserRandom = getComputerChoice();
  var User = getUserChoice(UserRandom);
  var Computer = getComputerChoice();
  console.log('User: ' + User);
  console.log('Computer: '+ Computer);
  console.log(determineWinner(User,Computer));
}

PlayGame();

