// on Initialization....

window.onload = function () {
    document.getElementById('number-submit').addEventListener("click", playGame);
    document.getElementById('restart-game').addEventListener("click", initGame);
}
let correctNumber = getRandomNumber();


function getRandomNumber() {
    let randomNumber = Math.random() * 100 + 1;
    let wholeNumber = Math.floor(randomNumber);
    console.log(wholeNumber);
    return wholeNumber
}

function playGame() {
    let numberGuess = document.querySelector('#number-guess').value; //Gets the input value from the input 
    if (numberGuess < correctNumber) return console.log("Too Low 😞");
    if (numberGuess > correctNumber) return console.log("Too High 😲");
    else return console.log("Huh");
}

function initGame() {}
