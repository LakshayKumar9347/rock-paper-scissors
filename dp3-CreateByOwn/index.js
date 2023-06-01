const userChoice = document.getElementById('userChoice')
const computerChoice = document.getElementById('computerChoice')
const FinalResult = document.getElementById('result')
const btnClicked = document.querySelectorAll('button')
let userDec
let computerDec
let result
// todo USER-DESCISION
btnClicked.forEach(btnClicked => btnClicked.addEventListener('click', (e) => {
    userDec = e.target.id
    userChoice.innerHTML = userDec //!--> userchoice has been made
    // todo COMPUTER-DECISION
    genComputerChoice()
    checkResult()
}))

function genComputerChoice() {
    let randomNo = Math.floor(Math.random(1) * btnClicked.length) + 1
    if (randomNo === 1) {
        computerDec = 'rock'
    }
    if (randomNo === 2) {
        computerDec = 'paper'
    }
    if (randomNo === 3) {
        computerDec = 'scissor'
    }
    console.log(computerDec);
    computerChoice.innerHTML = computerDec
}

function checkResult() {
    if (userDec === computerDec) {
        result = 'Draw'
    }
    if (userDec === 'rock' && computerDec === 'paper') {
        result = 'Computer Win'
    }
    if (userDec === 'rock' && computerDec === 'scissor') {
        result = 'User Win'
    }
    if (userDec === 'paper' && computerDec === 'rock') {
        result = 'User Win'
    }
    if (userDec === 'paper' && computerDec === 'scissor') {
        result = 'Computer Win'
    }
    if (userDec === 'scissor' && computerDec === 'paper') {
        result = 'User Win'
    }
    if (userDec === 'scissor' && computerDec === 'rock') {
        result = 'Computer Win'
    }
    console.log(result)
    FinalResult.innerHTML = result
}