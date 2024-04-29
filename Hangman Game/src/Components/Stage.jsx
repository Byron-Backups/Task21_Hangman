// This component is the visual side of our game.
// It gets the number of attempts left from HangmanGame and displays the corresponging image.

import React from 'react';
// The images we are using imported in the order of the states.
//   [0, 1, 2, 3, 4, 5, 6] with being 0 being an empty stage and 6 being the losing stage.
import image0 from '../Images/state5.GIF';  // 6 guesses left.
import image1 from '../Images/state6.GIF';
import image2 from '../Images/state7.GIF';
import image3 from '../Images/state8.GIF';
import image4 from '../Images/state9.GIF';
import image5 from '../Images/state10.gif';
import image6 from '../Images/state11.GIF'; // no more guesses left.


/* This is the main stage container for the images.
  It gets the number of attempts left from HangmanGame and returns the corresponging image.
*/
function Stage({ remainingAttempts }) {
  return (
    <div id="hangman-stage">
      {remainingAttempts === 0 ? <img src={image6} alt="Losing stage." />
        : remainingAttempts === 1 ? <img src={image5} alt="1 attempt remaining." />
          : remainingAttempts === 2 ? <img src={image4} alt="2 attempts remaining." />
            : remainingAttempts === 3 ? <img src={image3} alt="3 attempts remaining." />
              : remainingAttempts === 4 ? <img src={image2} alt="4 attempts remaining." />
                : remainingAttempts === 5 ? <img src={image1} alt="5 attempts remaining." />
                  : <img src={image0} alt="Empty stage." />}
    </div>
  );
}

export default Stage;
// End.