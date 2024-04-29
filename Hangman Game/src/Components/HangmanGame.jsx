// This is the main hangman game component.

import React, { useState } from 'react';
// Our imported components:
import Stage                    from './Stage';
import getRandomWord            from './GetRandomWords';
import TableOfGuessingLetters   from './TableOfGuessingLetters';


const HangmanGame = () => {
    /**
    We keep track of the secretWord we're trying to guess and the letters the user has guessed so far in state.
    State:
     - secretWord: The word we're trying to guess.
     - guessedLetters: An array of letters that the user has guessed so far.
     - remainingAttempts: The number of guesses the user has left.
    */
    const [secretWord, setsecretWord] = useState(getRandomWord());
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6);
  
    // This function resets the states back to default, and thus the resets the game.
    function resetGame() {
      setsecretWord(getRandomWord());
      setGuessedLetters([]);
      setRemainingAttempts(6);
    }
  
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
    const handleGuess = (letter) => {
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!secretWord.includes(letter)) {
                setRemainingAttempts(remainingAttempts - 1);
            }
        }
    };

    /**
     * Creates an array of underscores with the same length as the secretWord, and replaces
     * any letter that the user has guessed correctly with that letter. If the user
     * has not guessed a letter, the function will insert an underscore in its place.
     * @returns {array} - An array of underscores with the correctly guessed letters, displayed in their correct position.
    */
    const displayWord = () => {
        return secretWord.split('').map((letter) => (
            guessedLetters.includes(letter) ? (
            letter  // Returns the letter from word.
        )
        : ('_ ')    // Returns an underscore to indicate a blank space.
        ));
    };
  
    return (
        <div id='hangman-game-body'
        style={{position: "absolute", left: "33%", textAlign: "center"}}>
            <br></br>
            Word: {displayWord()}<br></br>
            Remaining Attempts: {remainingAttempts} <br></br>
            Guessed Letters: {guessedLetters.join(', ')} <br></br><br></br>
  
            {/* This diplays the table of letters if there are remaining attempts. */}
            <div id='guess-table'>

                {/* Ternary that checks if remainingAttempts is greater than 0. */}
                {remainingAttempts > 0 ? (
                    // Ternary that checks if displayWord === secretWord.
                    (displayWord().join('') !== secretWord) ? (
                    // The user has not guessed the secretWord yet, so display the table.

                        <div id='table-of-letters'>
                            {/* This is the table with all of our guess-able letters as clickable buttons. */}
                            <TableOfGuessingLetters
                                secretWord={secretWord}
                                guessedLetters={guessedLetters}
                                handleGuess={handleGuess}
                            />
                        </div>
                    ) : (
                        // User has guess the secretWord, so display win screen.
                        <div id='game-over-won'>
                        You did it!<br></br>
                        Your knowledge knows no bounds.<p/>
                        <p>Would you like to play again?</p>
                    </div>
                    )
                ) : (
                    // The user has not guessed the secretWord and has run out attempts.
                    <div id='game-over-lost'>
                        Game Over!<br></br>
                        The word was {secretWord}.<p/>
                        <p>Would you like to play again?</p>
                    </div>
                )}
                <br></br>
                {/* This button calls resetGame. */}
                <button onClick={() => resetGame()}>Reset Game</button>
            </div>
            <br></br>
            {/* This is the Stage that displays our hangman drawings. */}
            <aside style={{position: "absolute", right: 0}}>
                <Stage remainingAttempts={remainingAttempts} />
            </aside>
        </div>
    );
};
  
export default HangmanGame;

// End.