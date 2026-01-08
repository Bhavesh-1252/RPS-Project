let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const yourScore = document.querySelector("#your-score");
const computerScore = document.querySelector("#comp-score");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const userChoiceMsg = document.querySelector(".user-choice-msg");
const compChoiceMsg = document.querySelector(".comp-choice-msg");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const winTimes = () => {
    if (userWin) {
        userScore++;
        yourScore.innerText = userScore;
    } else {
        compScore++;
        computerScore.innerText = compScore;
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        msg.innerText = `YOU Won! Your ${userChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "#22b800";
    } else {
        msg.innerText = `YOU Lost! Computer's ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    winTimes();
}

const userCompChoice = (userChoice) => {
    userChoiceMsg.classList.remove("hide");
    compChoiceMsg.classList.remove("hide");
    userChoiceMsg.innerText = `Your Choice = ${userChoice}`;
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    compChoiceMsg.innerText = `Computer's Choice = ${compChoice}`;

    if(userChoice === compChoice) {
        msg.innerText = "Game is Draw";
        msg.style.backgroundColor = "#081b31";
    } else {
        userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        userCompChoice(userChoice);
    })
})