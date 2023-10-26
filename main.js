const choices = ['Rock','Paper','Scissors'];

function getComputerChoice()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice)
{
    //if paper > rock > scissorcs > paper
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(playerChoice === computerChoice)
    {
        return ("It's a tie");
    }
    else if (playerChoice == 'paper')
    {
        if (computerChoice == 'rock')
            return ("You Win! Paper beats Rock");
        else if (computerChoice == 'scissors')
            return ("You Lost! Scissors beats Paper");
    }
    else if (playerChoice == 'rock')
    {
        if (computerChoice == 'paper')
            return ("You Lost! Paper beats Rock");
        else if (computerChoice == 'scissors')
            return ("You Win! Rock beats Scissors");
    }
    else if (playerChoice == 'scissors')
    {
        if (computerChoice == 'paper')
            return ("You Win! Scissors beats Paper");
        else if (computerChoice == 'rock')
            return ("You Lost! Rock beats Scissors");
    }
    else
    {
        return "Wrong entry";
    }
}

function game()
{
    let playerHand = prompt("1, 2, 3 .. choose Rock, Paper or Scissors!");
    let computerHand = getComputerChoice();
    console.log(playRound(playerHand, computerHand));
}

let i = 0;
while (i <= 5)
{
    game();
}