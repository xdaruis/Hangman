const fruits = [
    "BANANA",
    "MANGO",
    "PAPAYA",
    "PINEAPPLE",
    "GUAVA",
    "APPLE",
    "PEAR",
    "CHERRY",
    "PLUM",
    "PEACH",
    "GRAPES",
    "PEACHES",
    "PLUMS",
    "APRICOTS",
    "CHERRIES",
    "NECTARINES",
    "MANGOES",
    "LYCHEES",
    "ORANGE",
    "LEMON",
    "LIME",
    "GRAPEFRUIT",
    "TANGERINE",
    "CLEMENTINE",
];

const word = fruits[Math.floor(Math.random() * fruits.length)];
const foundLetters = [];

function generateWord() {
    for (let i = 0; i < word.length; ++i) {
        foundLetters[i] = "_";
        document.getElementById("randomWord").innerHTML += "_ ";
    }
}

let lives = 7;
let gameStatus = 1;

function checkGameStatus() {
    if (lives == 0) {
        gameStatus = 0;
        document.getElementById("randomWord").innerHTML = "";
        for (let i = 0; i < word.length; ++i) {
            document.getElementById("randomWord").innerHTML += (word[i] + " ");
        }
        document.getElementById("gameStatus").innerHTML = "YOU LOST! TRY AGAIN!";
    } else if (!foundLetters.includes("_")) {
        gameStatus = 0;
        document.getElementById("gameStatus").innerHTML = "CONGRATULATIONS! YOU WON!";
    }
}

function checkLetter(actLetter) {
    if (gameStatus == 0) {
        return;
    }
    document.getElementById("randomWord").innerHTML = "";
    let isFound = 0;
    for (let i = 0; i < word.length; ++i) {
        if (actLetter.innerHTML == word[i]) {
            foundLetters[i] = word[i];
            isFound = 1;
        }
        document.getElementById("randomWord").innerHTML += (foundLetters[i] + " ");
    }
    if (isFound == 0) {
        document.getElementById("lives").innerHTML = "Lives: " + --lives + "❤️";
    }
    checkGameStatus();
}