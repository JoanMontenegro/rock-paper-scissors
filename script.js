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



*/

function computerPlay()
{
    switch (randomChoice())
    {
        case 1:
            console.log('Rock');
            break;
        case 2:
            console.log('Paper');
            break;
        case 3: 
            console.log('Scissors');
            break;
        default:
            console.log('Something went wrong');
            break;


    }

}

function randomChoice()
{
    return Math.floor(3 * Math.random() + 1);
}