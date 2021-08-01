// // menangkap pilihan komputer
// function getCompChoice() {
//     const comp = Math.random();
//     if(comp < 0.34) return "rock";
//     if(comp >= 0.34 && comp < 0.67) return 'paper';
//     return 'scissors';
// }

// // aturan
// function getResult(comp, player) {
//     if(player == comp) return 'DRAW'
//     if(player == 'rock') return (comp == 'paper') ? 'LOSE' :  'WIN';
//     if (player == 'paper') return (comp == 'scissors') ? 'LOSE' : 'WIN';
//     if(player == 'scissors') return (comp == 'rock') ? 'LOSE' : 'WIN';
// }


// // menagkap pilihan player
// const chosen = document.querySelectorAll('.player  button  img');
// chosen.forEach(choice => {
//     choice.addEventListener('click', function () {
//         const compChoice = getCompChoice();
//         const playerChoice = choice.className;
//         const result = getResult(compChoice, playerChoice);
        
//         const versus = document.querySelector('.versus');
//         versus.innerHTML = result;

//     })
// });


// OOP
const player = document.querySelectorAll('.player-choice button img');
const comp = document.querySelectorAll('.comp-choice button img');
const sytleChoice = document.querySelectorAll('#choice-style');
const styleResult = document.querySelector('.result .versus');


// parent class / abstract
class Game {
    constructor(playerChoice, compChoice) {
        this.playerChoice = playerChoice;
        this.compChoice = compChoice;
    }

    rule(c, p) {
        if(p == c) return 'DRAW'
        if(p == 'rock') return (c == 'paper') ? 'LOSE' :  'WIN';
        if (p == 'paper') return (c == 'scissors') ? 'LOSE' : 'WIN';
        if(p == 'scissors') return (c == 'rock') ? 'LOSE' : 'WIN';
    }

    newStyleImg() {
        sytleChoice.forEach(choice => {
            choice.addEventListener('click', function() {
                choice.classList.add('chosen')
            })
        })
    }

}
// let Rock = new Game('rock', 'rock');
// Rock.newStyleImg()

// Create a child class from Game
class RockPaperScissors extends Game {
    constructor (playerChoice, compChoice) {
        super(playerChoice, compChoice);
    }

    rule() {
        super.rule(c, p);
    }

        // menangkap pilihan komputer
    getCompRandomChoice() {
        const c = Math.random();
        if(c < 0.34) return "rock";
        if(c >= 0.34 && comp < 0.67) return 'paper';
        return 'scissors';
    }

    getPlayerChoice() {

        player.forEach(choice => {
            choice.addEventListener('click', function () {
                const cChoice = getCompRandomChoice();
                console.log(cChoice);
                const pChoice = choice.className;
                const result = this.rule(cChoice, pChoice);
                
                styleResult.innerHTML = result;

            })
        });
    }

}

// const startGame = new RockPaperScissors(['rock', 'paper', 'scissors'], ['rock', 'paper', 'scissors']);
// startGame.getPlayerChoice();

const coba = new RockPaperScissors()
coba.getPlayerChoice();















// getPlayerChoice.forEach(choice => {
//     choice.addEventListener('click', function() {
//         choice.classList.add('chosen')
//     })
// });

// sytleChoice.forEach(choice => {
//     choice.addEventListener('click', function() {
//         choice.classList.add('chosen')
//     })
// });


// getCompChoice.forEach(choice => {
//     choice.addEventListener('click', function() {
//         alert('halo')
//     })
// });








