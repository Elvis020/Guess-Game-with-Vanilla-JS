// on Initialization....

window.onload = function () {
    document.getElementById('number-submit').addEventListener("click", playGame);
    document.getElementById('restart-game').addEventListener("click", initGame);
}
// Global Variables
let correctNumber = getRandomNumber();
let guessHistory = []


function getRandomNumber() {
    let randomNumber = Math.random() * 100 + 1;
    let wholeNumber = Math.floor(randomNumber);
    console.log(wholeNumber);
    return wholeNumber
}

function playGame() {
    let numberGuess = document.querySelector('#number-guess').value; //Gets the input value from the input 
    guessResult(numberGuess);
    saveGuessHistory(numberGuess);
    displayGuessHistory();
}

function initGame() {
    correctNumber = getRandomNumber();
    document.getElementById("history").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    guessHistory = [];
    displayGuessHistory();

}

function guessResult(numberGuess) {
    if (numberGuess < correctNumber) {
        document.querySelector('#number-guess').value = ""
        return showNumberBelow()
    } else if (numberGuess > correctNumber) {
        document.querySelector('#number-guess').value = ""
        return showNumberAbove()
    } else if (numberGuess == correctNumber) {
        document.querySelector('#number-guess').value = ""
        return showYouWon()
    }
}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning1":
            dialog = "<div class='alert alert-danger' role='alert'>"
            break;
        case "warning2":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text + "</div>"
    return dialog
}


function showYouWon() {
    const text = "Awesome job, you got it";
    let dialog = getDialog("won", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
    const text = "Your guess is too high";
    let dialog = getDialog("warning2", text);
    document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
    const text = "Your guess is too low";
    let dialog = getDialog("warning1", text)
    document.getElementById("result").innerHTML = dialog;
}

function displayGuessHistory() {
    let index = guessHistory.length - 1; //This makes the array fill from the bottom becuz it starts from -1 not 0...Remember your indexes
    let listOfGuesses = "<ul class='list-group'>"
    while (index >= 0) {
        listOfGuesses += "<li class='list-group-item bg-dark text-light mb-2'>" + "You guessed " + guessHistory[index] + "</li>";
        // Use -- instead of ++ becuz we are dealing with negative indexes
        index--;
    }

    listOfGuesses += "</ul>";
    document.getElementById("history").innerHTML = listOfGuesses;
}

function saveGuessHistory(guess) {
    if (guess != correctNumber) return guessHistory.push(guess)
}
