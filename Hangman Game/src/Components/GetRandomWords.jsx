// This provides a random word from the array to be used as the secretWord for that round of the game.

// Here are our words:
const wordList = [
    "javascript",
    "typescript",
    "assembly",
    "angular",
    "neovim",
    "react",
    "mongo",
    "redux",
    "ruby",
    "java",
    "php",
    "bun",
    "vue",
    "zig"
];

// This function returns a random word from the array.
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
}

export default getRandomWord;
// End.