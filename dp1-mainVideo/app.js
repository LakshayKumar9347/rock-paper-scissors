const computerChoice = document.getElementById('computer-choice')
const userChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
// selecting Buttons 
const possibleChoices = document.querySelectorAll('button')
let userSelected
let computerSelected
let result
// Logic for when click on Button display inside the userChoice
// console.log(possibleChoices.length) -> 3
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userSelected = e.target.id
    userChoice.innerText = userSelected

    computerOpt()
    getresults()

}))


// writing function for computer Opt
function computerOpt() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    // Log the random number to the console
    // Generate a random number between 1 and 3
    if (randomNumber === 1) {
        computerSelected = "Rock"
    }
    if (randomNumber === 2) {
        computerSelected = "Paper"
    }
    if (randomNumber === 3) {
        computerSelected = "Scissors"
    }
    computerChoice.innerText = computerSelected
}

function getresults() {
    if (computerSelected === userSelected) {
        result = "its draw"
    }
    if (computerSelected === "Rock" && userSelected === "Paper") {
        result = "You win"
    }
    if (computerSelected === "Rock" && userSelected === "Scissors") {
        result = "PC win"
    }
    if (computerSelected === "Paper" && userSelected === "Rock") {
        result = "PC win"
    }
    if (computerSelected === "Paper" && userSelected === "Scissors") {
        result = "You win"
    }
    if (computerSelected === "Scissors" && userSelected === "Rock") {
        result = "YOu Wins"
    }
    if (computerSelected === "Scissors" && userSelected === "Paper") {
        result = "PC Wins"
    }
    resultDisplay.innerHTML = result

    // if (userSelected = "Rock" === computerSelected = "Scissors") {
    // result.innerText = "You Win"
}
