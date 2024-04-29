import './App.css';
import WelcomeHeading from './Components/WelcomeHeading';
import HangmanGame from './Components/HangmanGame';
import HelpButton from './Components/HelpButton';

// Our main app.
function App() {
  return (
    <div className="App">
      <body id="main-page">
        {/* Calling our components. */}
        <WelcomeHeading />
        <HangmanGame />
        <HelpButton />
      </body>
    </div>
  );
}

export default App;
