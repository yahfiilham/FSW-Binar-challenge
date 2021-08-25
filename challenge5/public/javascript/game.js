const player = document.querySelectorAll('.player-choice button img');
const comp = document.querySelectorAll('.comp-choice button img');
const styleResult = document.querySelector('.result .versus');
const sytleChoice = document.querySelectorAll('#choice-style');
const playerRock = document.querySelector('.player-choice button .rock');
const playerPaper = document.querySelector('.player-choice button .paper');
const playerScissors = document.querySelector('.player-choice button .scissors');
const compRock = document.querySelector('.comp-choice button .rock');
const compPaper = document.querySelector('.comp-choice button .paper');
const compScissors = document.querySelector('.comp-choice button .scissors');
const refresh = document.querySelector('.refresh img');

// dengan  OOP
class Game {
    constructor() {}

    // 1. menangkap pilihan komputer
    getCompChoice() {
        const comp = Math.random();
        if(comp < 0.34) return "rock";
        if(comp >= 0.34 && comp < 0.67) return 'paper';
        return 'scissors';
    }

    // 2. aturan
    getResult(comp, player) {
        if(player == comp) return 'DRAW'
        if(player == 'rock') return (comp == 'paper') ? 'COM WIN' :  'PLAYER 1 WIN';
        if (player == 'paper') return (comp == 'scissors') ? 'COM WIN' : 'PLAYER 1 WIN';
        if(player == 'scissors') return (comp == 'rock') ? 'COM WIN' : 'PLAYER 1 WIN';
    }

    // 3. menangkap pilihan player
    getPlayerChoice() {
        
        player.forEach( choice => {
            choice.addEventListener('click', function () {
                const compChoice = this.getCompChoice();
                const playerChoice = choice.className;
                const result = this.getResult(compChoice, playerChoice);
        
                // tampilkan hasil
                styleResult.innerHTML = result;

                // styling

                // styling result
                this.styleResultChange(result);
                // styling pilhan player
                this.stylePlayerChange(playerChoice);
                // styling pilihan komputer
                this.styleCompChange(compChoice);

                // end styling
            }.bind(this))
        });
    }

    // styling result
    styleResultChange(result) {
        styleResult.classList.add('style-result');
        if (result == "DRAW") return styleResult.style.backgroundColor = '#035B0C';
        if (result != "DRAW") return styleResult.style.backgroundColor = '#4C9654';
    }
    // end styling result

    // styling player choice
    stylePlayerChange (playerChoice) {
        // tambah style jika player pilih batu
        playerRock.parentElement.classList.add('style-choice');
        if(playerChoice != 'rock') {
            playerRock.parentElement.classList.remove('style-choice');
        }
        // tambah style jika player pilih kertas
        playerPaper.parentElement.classList.add('style-choice');
        if(playerChoice != 'paper') {
            playerPaper.parentElement.classList.remove('style-choice');
        }
        // tambah style jika player pilih gunting
        playerScissors.parentElement.classList.add('style-choice');
        if(playerChoice != 'scissors') {
            playerScissors.parentElement.classList.remove('style-choice');
        }
    }
    // end styling player choice

    // styling computer choice
    styleCompChange (compChoice) {
        // tambah style jika com pilih batu
        if (compChoice == 'rock') {
            compRock.parentElement.classList.add('style-choice');
        } else if (compChoice != 'rock') {
            compRock.parentElement.classList.remove('style-choice');
        }
        // tambah style jika com pilih batu
        if (compChoice == 'paper') {
            compPaper.parentElement.classList.add('style-choice');
        } else if (compChoice != 'paper') {
            compPaper.parentElement.classList.remove('style-choice');
        }
        // tambah style jika com pilih batu
        if (compChoice == 'scissors') {
            compScissors.parentElement.classList.add('style-choice');
        } else if (compChoice != 'scissors') {
            compScissors.parentElement.classList.remove('style-choice');
        }
    }
    // end styling computer choice

    // 4. reset game
    reset() {
        refresh.addEventListener('click', function() {
            // reset style di pilihan player dan com
            sytleChoice.forEach( choice => {
                choice.classList.remove('style-choice');
            });
            //  reset style di result
            styleResult.classList.remove('style-result');
            styleResult.innerHTML = 'VS';
            styleResult.style.backgroundColor = 'inherit';
        })
    }
}

const start = new Game();
start.getPlayerChoice();
start.reset();