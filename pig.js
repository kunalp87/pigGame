let newGame = document.querySelector(".btn-new");
let roll = document.querySelector(".btn-roll");
let hold = document.querySelector(".btn-hold");
let score1 = document.querySelector("#score1"); // Current score for Player 1
let score2 = document.querySelector("#score2"); // Current score for Player 2
let dice = document.querySelector(".dice");
let score_1 = document.querySelector("#score--1"); // Total score for Player 1
let score_2 = document.querySelector("#score--2"); // Total score for Player 2
let player1 = document.querySelector(".player1"); // Player 1 container
let player2 = document.querySelector(".player2"); // Player 2 container
let player11 = document.querySelector(".player11");
let player22 = document.querySelector(".player22");
let winPlayer1 = document.querySelector(".win-player1");
let winPlayer2 = document.querySelector(".win-player2");
let winMsg=document.querySelector(".msg");


const randomNumber = () => Math.floor(Math.random() * 6) + 1;

let result;
let currentScore = 0;
let activePlayer = 1;
let totalScore1 = 0;
let totalScore2 = 0;
const winningScore = 100;


const switchPlayer = () => {
    currentScore = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    if (activePlayer === 1) {
        player1.classList.add("player1");
        player1.classList.remove("player11");
        player2.classList.add("player2");
        player2.classList.remove("player22");
    }
    else {
        player1.classList.remove("player1");
        player1.classList.add("player11");
        player2.classList.remove("player2");
        player2.classList.add("player22");
    }



    console.log(`Player ${activePlayer}'s turn`);
};


const disableButtons = () => {
    roll.disabled = true;
    hold.disabled = true;
};


const checkForWinner = () => {
    if (totalScore1 >= winningScore) {
        console.log("Player 1 wins!");
      
        player1.classList.add("win-player1");
        player1.classList.remove("player1");
        player1.classList.remove("player11");
        winMsg.classList.add("msg");
        winMsg.classList.remove("msg-none");
        winMsg.innerHTML="Congratulation ,   Player 1 wins!🥳"
        disableButtons();
    } else if (totalScore2 >= winningScore) {
        console.log("Player 2 wins!");
        
        player2.classList.add("win-player2");
        player2.classList.remove("player2");
        player2.classList.remove("player22");
        winMsg.classList.add("msg");
        winMsg.classList.remove("msg-none");
        winMsg.innerHTML="Congratulation , Player 2 wins!🥳"
        disableButtons();
    }
};


roll.addEventListener("click", () => {
    result = randomNumber();

    dice.classList.remove("dice");
    dice.classList.remove("dice1");
    dice.classList.remove("dice2");
    dice.classList.remove("dice3");
    dice.classList.remove("dice4");
    dice.classList.remove("dice5");
    dice.classList.remove("dice6");
    dice.classList.add(`dice${result}`);

    if (result === 1) {

        currentScore = 0;
        if (activePlayer === 1) {
            score1.innerHTML = 0;
        } else {
            score2.innerHTML = 0;
        }
        switchPlayer();
    } else {

        currentScore += result;

        if (activePlayer === 1) {
            score1.innerHTML = currentScore;
        } else {
            score2.innerHTML = currentScore;
        }
    }
});


hold.addEventListener("click", () => {
    if (activePlayer === 1) {

        totalScore1 += currentScore;
        score_1.innerHTML = totalScore1;
    } else {

        totalScore2 += currentScore;
        score_2.innerHTML = totalScore2;
    }


    currentScore = 0;
    score1.innerHTML = 0;
    score2.innerHTML = 0;


    checkForWinner();

    if (totalScore1 < winningScore && totalScore2 < winningScore) {
        switchPlayer();
    }
});


newGame.addEventListener("click", () => {
    roll.disabled = false;
    hold.disabled = false;
    totalScore1 = 0;
    totalScore2 = 0;
    currentScore = 0;
    activePlayer = 1;
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    score_1.innerHTML = 0;
    score_2.innerHTML = 0;
    dice.classList.remove("dice");
    dice.classList.remove("dice1");
    dice.classList.remove("dice2");
    dice.classList.remove("dice3");
    dice.classList.remove("dice4");
    dice.classList.remove("dice5");
    dice.classList.remove("dice6");
    player1.classList.add("active");
    player2.classList.remove("active");
    player1.classList.remove("win-player1");
    player2.classList.remove("win-player2");
    player1.classList.add("player1");
    player1.classList.remove("player11");
    player2.classList.add("player2");
    player2.classList.remove("player22");

    winMsg.classList.remove("msg");
    winMsg.classList.add("msg-none");
    console.log("New Game started");





});
