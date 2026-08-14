const heading = document.querySelector("#mainHeading");
const nameInput = document.querySelector("#nameInput");
const typingMessage = document.querySelector("#typingMessage");
const resultMessage = document.querySelector("#resultMessage");

const greetButton = document.querySelector("#greetButton");
const colorButton = document.querySelector("#colorButton");
const resetButton = document.querySelector("#resetButton");

function displayGreeting() {
    const userName = nameInput.value.trim();

    if (userName === "") {
        resultMessage.textContent = "Please enter your name.";
        console.log("Greeting not displayed: no name was entered.");
    } else {
        heading.textContent = "Hello, " + userName;
        resultMessage.textContent =
            "The greeting was displayed successfully.";

        console.log("Greeting displayed for:", userName);
    }
}

function showTypedText() {
    typingMessage.textContent =
        "You are typing: " + nameInput.value;

    console.log("Input detected:", nameInput.value);
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
    console.log("Background color changed.");
}

function resetPage() {
    heading.textContent = "Event-Driven Webpage";
    nameInput.value = "";
    typingMessage.textContent = "You are typing:";
    resultMessage.textContent =
        "Enter your name and select an action.";
    document.body.style.backgroundColor = "#f3f4f6";

    console.log("Webpage reset to its original state.");
}

greetButton.addEventListener("click", displayGreeting);
colorButton.addEventListener("click", changeBackground);
resetButton.addEventListener("click", resetPage);
nameInput.addEventListener("input", showTypedText);

console.log("JavaScript file loaded successfully.");
