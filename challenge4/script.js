const player = document.querySelectorAll('.player-choice button img');
const comp = document.querySelectorAll('.comp-choice button img');
const styleResult = document.querySelector('.result .versus');
const playerRock = document.querySelector('.player-choice button .rock');
const playerPaper = document.querySelector('.player-choice button .paper');
const playerScissors = document.querySelector('.player-choice button .scissors');
const compRock = document.querySelector('.comp-choice button .rock');
const compPaper = document.querySelector('.comp-choice button .paper');
const compScissors = document.querySelector('.comp-choice button .scissors');
const refresh = document.querySelector('.refresh img');


// menangkap pilihan komputer
function getCompChoice() {
    const comp = Math.random();
    if(comp < 0.34) return "rock";
    if(comp >= 0.34 && comp < 0.67) return 'paper';
    return 'scissors';
}

// aturan
function getResult(comp, player) {
    if(player == comp) return 'DRAW'
    if(player == 'rock') return (comp == 'paper') ? 'COM WIN' :  'PLAYER 1 WIN';
    if (player == 'paper') return (comp == 'scissors') ? 'COM WIN' : 'PLAYER 1 WIN';
    if(player == 'scissors') return (comp == 'rock') ? 'COM WIN' : 'PLAYER 1 WIN';
}

// menagkap pilihan player
player.forEach(choice => {
    choice.addEventListener('click', function () {
        const compChoice = getCompChoice();
        const playerChoice = choice.className;
        const result = getResult(compChoice, playerChoice);

        // tampilkan hasil
        styleResult.innerHTML = result;

        // styling
        // styling result
        styleResult.classList.add('style-result');
        if (result == 'DRAW') {
            styleResult.style.backgroundColor = '#035B0C';
        } else if(result != 'DRAW') {
            styleResult.style.backgroundColor = '#4C9654';
        }
        // end styling result


        // styling player choice
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
        // end styling player choice


        // styling computer choice
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
        // end styling computer choice
        // end styling
    })
});

refresh.addEventListener('click', function() {
     window.location.reload();
})


// // OOP
// const player = document.querySelectorAll('.player-choice button img');
// const comp = document.querySelectorAll('.comp-choice button img');
// const sytleChoice = document.querySelectorAll('#choice-style');
// const styleResult = document.querySelector('.result .versus');


// // parent class / abstract
// class Game {
//     constructor(playerChoice, compChoice) {
//         this.playerChoice = playerChoice;
//         this.compChoice = compChoice;
//     }

//     rule(c, p) {
//         if(p == c) return 'DRAW'
//         if(p == 'rock') return (c == 'paper') ? 'LOSE' :  'WIN';
//         if (p == 'paper') return (c == 'scissors') ? 'LOSE' : 'WIN';
//         if(p == 'scissors') return (c == 'rock') ? 'LOSE' : 'WIN';
//     }

//     newStyleImg() {
//         sytleChoice.forEach(choice => {
//             choice.addEventListener('click', function() {
//                 choice.classList.add('chosen')
//             })
//         })
//     }

// }
// // let Rock = new Game('rock', 'rock');
// // Rock.newStyleImg()

// // Create a child class from Game
// class RockPaperScissors extends Game {
//     constructor (playerChoice, compChoice) {
//         super(playerChoice, compChoice);
//     }

//     rule() {
//         super.rule(c, p);
//     }

//         // menangkap pilihan komputer
//     getCompRandomChoice() {
//         const c = Math.random();
//         if(c < 0.34) return "rock";
//         if(c >= 0.34 && comp < 0.67) return 'paper';
//         return 'scissors';
//     }

//     getPlayerChoice() {

//         player.forEach(choice => {
//             choice.addEventListener('click', function () {
//                 const cChoice = getCompRandomChoice();
//                 const pChoice = choice.className;
//                 console.log(pChoice);
//                 const result = this.rule(choice, pChoice);
                
//                 styleResult.innerHTML = result;

//             })
//         });
//     }

// }

// // const startGame = new RockPaperScissors(['rock', 'paper', 'scissors'], ['rock', 'paper', 'scissors']);
// // startGame.getPlayerChoice();

// const coba = new RockPaperScissors()
// coba.getPlayerChoice();