const computerOpt = document.getElementById('computerOpt')
const userOpt = document.getElementById('userOpt')
const finalResult = document.getElementById('result')
const btnClicked = document.querySelectorAll('button')
let computerChoice
let userChoice
let result

// // userChoice
btnClicked.forEach(btnClicked => btnClicked.addEventListener('click', (e) => {
    userChoice = e.target.id
    userOpt.innerHTML = userChoice
    //  console.log('userchoice',userChoice)
    generateComputerDec()
    getResults()
}))

// Computer Choice 
function generateComputerDec() {
    let randomNo = Math.floor(Math.random(1) * btnClicked.length) + 1
    if (randomNo == 1) {
        computerChoice = 'rock'
    }
    if (randomNo == 2) {
        computerChoice = 'paper'
    }
    if (randomNo == 3) {
        computerChoice = 'scissors'
    }
    computerOpt.innerHTML = computerChoice
    // console.log('compchice',computerChoice)
}

function getResults() {
    if (userChoice === computerChoice) {
        result = "match is draw"
    }
    if (userChoice === "rock"&& computerChoice === "paper") {
        result = "Comp Win"
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "You Win"
    }
    if (userChoice === "paper" && computerChoice === "rock") {
        result = "You Win"
    }
    if (userChoice === "paper" && computerChoice === "scissors") {
        result = "Comp Win"
    }
    if (userChoice === "rock" && computerChoice === "paper") {
        result = "Comp Win"
    }
    if (userChoice === "rock" && computerChoice === "scissors") {
        result = "You Win"
    }
    if (userChoice === "scissors" && computerChoice === "rock") {
        result = "Comp Win"
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
        result = "You Win"
    }
    finalResult.innerHTML = result
    // console.log(result)
}
