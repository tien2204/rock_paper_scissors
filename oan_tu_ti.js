let playerScore = 0;
let compScore = 0;
let winner = '';

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    switch (compChoice) {
        case 1:
            choice = 'rock';
            break;
        case 2:
            choice = 'paper';
            break;
        case 3:
            choice = 'scissor';
            break;
        default:
            console.log('Invalid')
            break;
    }
    console.log('Comp choose '+choice);
    return choice;
}

function playRound (playerSelection, computerSelection) {

    if(playerSelection === computerSelection) {
        winner = 'none';
    }

    if(computerSelection === 'rock') {
        if(playerSelection === 'paper') {
            winner = 'player';
            playerScore++;
        } else { 
            winner = 'computer';
            compScore++;
        }
    }

    if(computerSelection === 'paper') {
        if(playerSelection === 'rock') {
            winner = 'computer';
            compScore++;
        } else { 
            winner = 'player';
            playerScore++;
        }
    }

    if(computerSelection === 'scissor') {
        if(playerSelection === 'paper') {
            winner = 'computer';
            compScore++;
        } else { 
            winner = 'player';
            playerScore++;
        }
    }

}

function endGame () {
    return playerScore === 5 || compScore === 5
}

const thong_bao = document.querySelector('#whoWin');
const playerDiv = document.querySelector('#playerScore');
const computerDiv = document.querySelector("#computerScore");

let rock = document.querySelector('.Rock');
rock.addEventListener('click', () => clickEvent(rock));

let paper = document.querySelector('.Paper');
paper.addEventListener('click', () => clickEvent(paper));

let scissor = document.querySelector('.Scissors');
scissor.addEventListener('click', () => clickEvent(scissor));

function clickEvent (playerSelection) {

    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    bonusScore();
    if(endGame ()) {
        loiKet ();
    }
}

function bonusScore () {
    if(winner === 'none') {
        thong_bao.textContent = 'Hoa voi mt for real???';
    } else if (winner === 'player') {
        thong_bao.textContent = 'Rua del chiu dc';
    } else if (winner === 'computer') {
        thong_bao.textContent = 'Ngu';
    }
    
    playerDiv.textContent = `Player : ${playerScore}`;
    computerDiv.textContent = `Computer: ${compScore}`;
}

function loiKet () {
    return playerScore > compScore
        ? (alert('U won'))
        : (alert('U lose'))
}
