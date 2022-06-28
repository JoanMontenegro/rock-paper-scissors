/* 
1- create function called computerPlay
2- computerPlay will return Rock, Paper or Scissors.
3- this function will make the computer play.


1. Function computerPlay
        call function randomChoice
            this will return a number from 1 to 3.
    Switch randomChoice
        case 1 -> Rock
        case 2 -> Paper
        case 3 ->Scissors

function randomChoice
        Math.random() generates a number from 0 to < 1.     
        multiplicar 3*random + 1.. y se le hace el floor a ese resultado.

Second Part-
1 Create a function that receives two param playerSelection and ComputerSelection.
2- return a string declaring who won.

--- function gameMatch (playerSelection, ComputerSelection)

  1. Compare selections -- check option caseinsensitive

  .---- if playerSelection and computerSelection are equal-- is a tie
  if not  

      switch of player selection
        case rock
            compare with computerSelection (scissors)
                win
            if not 
                lose
        case paper
            compare with computerSelection (rock)
                win
            if not 
                lose
        case scissors
            compare with computerSelection (paper)
                win
            if not 
                lose
        
        default
            selection is wrong... do it again




  Rock beats scissors,
  paper beats rock
  scissors beats paper



*/

import cardSelected from './selected.js';
import startMatch from './startmatch.js';

let selection;
let isCardDisabled = false;


document.addEventListener('click', (e) => {

    
  
    if(e.target.classList[0] === 'cards' && !isCardDisabled){
        
        isCardDisabled = true;
        selection = cardSelected(e);


    }
    if(e.target.classList[0] === 'start' && isCardDisabled){

        
        isCardDisabled = false;

    }



});




//startMatch();

/*

function startMatch()
{
        let computer;
        let resultGame;
        let playerScore = 0;
        let player;
        let checker;

    for(let i = 1; i < 6; i++)
    {
        checker = true;
       
       

        while(checker)
        {
            player = prompt('Choose Paper, Rock or Scissors', 'Rock'); 
            computer = computerPlay();
            resultGame = gameRound(player, computer);
            if(resultGame.search('Houston') > 0)
            {
                checker = true;
                alert('Houston, we have a problem, Say again')

            }
                
            else
                checker = false;

        }
       
      
         
        
        playerScore = playerScore + resultWinner(resultGame);

        alert(resultGame);
                       

    }

    if(playerScore > 0)
        alert('Match is over - You win');
    else if(playerScore < 0)
        alert('Match is over - You lose');
    else
        alert('Whattttt, Match is over it is a Tie, what are the odds');



}

function resultWinner(score)
{
    let count;
    if(score.search('win') > 0)
        count = 1;
    else if(score.search('tie') > 0)
        count = 0;
    else
        count = -1;
    return count;
}


function computerPlay()
{
    let compSel;
    switch (randomChoice())
    {
        case 1:
            compSel = 'Rock';
            break;
        case 2:
            compSel = 'Paper';
            break;
        case 3: 
            compSel ='Scissors';
            break;
        default:
            console.log('Something went wrong');
            break;


    }

    return compSel;

}

function randomChoice()
{
    return Math.floor(3 * Math.random() + 1);
}





function gameRound(playerSelection, computerSelection)
{
   let result;

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        result = 'it\'s a tie';
    }
    else
    {
        switch(playerSelection.toLowerCase())
        {

            case 'rock':
                computerSelection == 'Scissors' ? result = 'You win, Rock beats Scissors' : 
                                                  result = 'You lose, Paper beats Rock' ;
                break;
            case 'paper':
                 computerSelection == 'Rock' ? result = 'You win, Paper beats Rock' : 
                                                   result = 'You lose, Scissors beats Paper' ;
                break;

            case 'scissors':
                 computerSelection == 'Paper' ? result = 'You win, Scissors beats Paper' : 
                                                   result = 'You lose, Rock beats Scissors' ;
                break;
            default:
                result = 'Hey Houston, we hava a problem'
                break;

        }
        
    }

    return result;


}

*/