import React from 'react';

// This is just a simple welcome heading that goes on top.
function WelcomeHeading() {
    return (
      <div  id='welcome-heading'
            style={{position: "top", textAlign: "center", padding: "20px"}}>
            <h1>Let's play a game of Hangman.</h1>
      </div>
    );
}

export default WelcomeHeading;

// End.