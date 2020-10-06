// on Initialization....
let correctNumber = getRandomNumber();

window.onload = function () {
    document.getElementById('number-submit').addEventListener("click", playGame);
    document.getElementById('restart-game').addEventListener("click", initGame);

}


function playGame() {
    let numberGuess = document.querySelector('#number-guess').value; //Gets the input value from the input 
    console.log(numberGuess);
}

function initGame() {}



function getRandomNumber() {
    let randomNumber = Math.random() * 100 + 1;
    let wholeNumber = Math.floor(randomNumber);
    console.log('Random Number:', wholeNumber);
}
