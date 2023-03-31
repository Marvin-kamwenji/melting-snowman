const words = [
    "JAVASCRIPT",
    "HTML",
    "CSS",
    "NODE",
    "REACT",
    "ANGULAR",
    "JQUERY",
    "VUE"
];

// will hold the random word that the player needs to guess
let wordToGuess;

// will hold an array of underscores representing the unguessed letters in the word
let guessedLetters;

// will keep track of the number of incorrect guesses the player has made
let wrongGuesses;

// sed to determine which Melting Snowman image to display
let imageCount;

function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function initializeGame() {
    wordToGuess = selectRandomWord();
    guessedLetters = Array(wordToGuess.length).fill('_');
    wrongGuesses = 0;

    updateWordDisplay();
}

function updateWordDisplay() {
    const wordContainer = document.querySelector('.word');
    wordContainer.innerHTML = guessedLetters.join(' ');
}