import React, { useState } from 'react';

/**
 * HandleGuess is the event handler for when the user clicks the guess button.
 * It takes a single letter as an argument and updates the guessedLetters and
 * remainingAttempts state accordingly.
 * 
 * If the letter is not already in guessedLetters, it adds it to the array and
 * decrements remainingAttempts if the secretWord does not contain the letter.
 * 
 * @param {string} letter - The letter the user has guessed.
*/

const HandleGuess = (letter, { secretWord, guessedLetters, setGuessedLetters, remainingAttempts, setRemainingAttempts }) => {
    
    if (!guessedLetters.includes(letter)) {
        setGuessedLetters([...guessedLetters, letter]);
        if (!secretWord.includes(letter)) {
            setRemainingAttempts(remainingAttempts - 1);
        }
    }
    return { guess: HandleGuess };  // Return as an object with a key of 'guess' and the function as the value.
};

export default HandleGuess;

// ! My notes:
// I did not submit this file because it is not used, and I do not want to give them ammo for failing my task.
// The reason this is not used is because it would have been called inside the TableOfGuessingLetters component,
//  inside of lines 19 & 30, and would have made them look terribly messy, so I left it as a function in HangmanGame.jsx.

// End.