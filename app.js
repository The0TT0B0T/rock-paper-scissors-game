// Want to have the user to click the button and have it show up in the "Your choice section".
//Same goes for the computer choice.
//first we have to get all the sections for the buttons by grabbing the id's we have in the html file

const computerChoiceDisplay = document.getElementById("computer-choice");//this grabs the id computer-choice thqat we have in the html file
const userChoiceDisplay = document.getElementById("user-choice");//we're grabbing the span based on the id
const resultDisplay = document.getElementById("result"); //setting variables to the element because those are the buttons we are adding logic
const possibleChoices = document.querySelectorAll("button");//used query selector to access all the possible choices from the button element
let userChoice; //put this globally so we can use it later
let computerChoice;
let result;
//below I grab the buttons and for each button/possible Choice. I addEventListner to listen up for a click
//so if I click any of the buttons, I basically want tsomething to happen.
//so I'll pass thru a function so whenever we click we get the id
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice(); //this is for the function below
    getResult();
}))
// Above every time we click a button the "Your choice" section should show the diplay of which button you chose 

//This fucmtion is to give the give the computer choices
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3); //or you can use possibleChoices.length
    if (randomNumber == 1) {
        computerChoice = "rock";
    }
    if (randomNumber == 2) {
        computerChoice = "scissors";
    }
    if (randomNumber == 1) {
        computerChoice = "paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
// This function is to show the winner and of the game
function getResult() {
    if (computerChoice === userChoice ) {
        result = "Draw!";
    }
    if (computerChoice === "rock" && userChoice === "paper") {
        result = "Winner!";
    }
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You Lost!";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "Winner!";
    }
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You Lost!";
    }
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "Winner";
    }
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You lost!";
    }
    resultDisplay.innerHTML =result;
}