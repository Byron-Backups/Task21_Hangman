// This renders our table of letters from A-Z that the user can click to guess.

import React from 'react';


/**
 * TableOfGuessingLetters displays a table of letters from A-Z, in rows of 5.
 *
 * @param {string} secretWord       - The word that the user is trying to guess.
 * @param {array} guessedLetters    - An array of letters that the user has guessed so far.
 * @param {function} handleGuess    - A function that is called when a letter is clicked.
 * 
 * It maps over 2 arrays, one for the rows, and one for the columns.
 * Both with a value of 5, giving us a 5x5 table.
 * 
 * The nested ternery operators are used to check if the letter has been guessed, and then if it is in the secretWord.
 * If it is guessed, but not in the secretWord - background color is set to pink.
 * If it is guessed, and in the secretWord     - background color is set to lightgreen.
 * Otherwise the background color is not set, and the button has an added onClick function of handleGuess(which takes the current letter).
 *
 * @returns {JSX.Element} A table of letters to guess.
 */
function TableOfGuessingLetters({ secretWord, guessedLetters, handleGuess }) {
    const rows = Array.from({ length: 5 }, (_, i) => i)
    return (
        <table>
            <tbody>
                {rows.map(row => (
                    <tr key={row}>
                        {Array.from({ length: 5 }, (_, j) => String.fromCharCode(row * 5 + j + 65))
                            .map(letter => (
                                guessedLetters.includes(letter)
                                    ? secretWord.includes(letter)
                                        ? <td key={letter}><button style={{ backgroundColor: "lightgreen" }}>{letter}</button></td>
                                        : <td key={letter}><button style={{ backgroundColor: "pink" }}>{letter}</button></td>
                                    : <td key={letter}><button onClick={() => handleGuess(letter)}>{letter}</button></td>
                            ))}
                    </tr>
                ))}
                {/* Letter Z as well. (He's shy so he gets his own row.)*/}
                <tr>
                    <td key="Z">
                        <button
                            style={{ backgroundColor: guessedLetters.includes("Z")
                            ? (secretWord.includes("Z") ? "lightgreen" : "pink")
                            : "" }}
                            onClick={guessedLetters.includes("Z") ? null : () => handleGuess("Z")}
                        >Z</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableOfGuessingLetters;

// End.