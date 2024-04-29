import React from 'react';

// This is the help button that explains the game with an alert.
function HelpButton() {
    return (
        <button onClick={() => alert("The rules of the game are simple:\n" +
            "You have a set amount of guesses to guess the letters of the hidden word.\n" +
            "When your guesses run out, you lose, but if you guess the word correctly, you win.")}
            style={{position: "absolute", right: "5%", fontSize: "18px"}}>
            Need help?
        </button>
    );
}

export default HelpButton;

// End.