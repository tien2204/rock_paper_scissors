
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
        return 'Hoa';
    }

    if(computerSelection === 'rock') {
        if(playerSelection === 'paper') {
            return 'Win';
        } else { 
            return 'Lose';
        }
    }

    if(computerSelection === 'paper') {
        if(playerSelection = 'rock') {
            return 'Lose';
        } else { 
            return 'Win';
        }
    }

    if(computerSelection === 'scissor') {
        if(playerSelection === 'paper') {
            return 'Lose';
        } else { 
            return 'Win';
        }
    }

}


function game () {
    let thang = 0, thua = 0, hoa = 0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose one', 'rock').toLowerCase;
        let computerSelection = getComputerChoice();
        let x = playRound(playerSelection, computerSelection);
        if(x === 'Win') {
            thang++;
            console.log('Win');
        } else if(x === 'Lose') {
            thua++;
            console.log('Lose');
        } else {
            hoa++;
            console.log('Hoa');
        }
    }

    if(thang > 2) {
        console.log('NON');
    } else if(thua > 2) {
        console.log('Ngu');
    } else {
        console.log("Van ngu");
    }

}

console.log(game());
