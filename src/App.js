import React from 'react';
import logo from './crystal-shine.svg';
import './App.css';
import Question from './question'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Game Show
        </p>
        <a
          className="App-link"
          href="https://www.trivia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trivia
        </a>
        <p>
        <button>Click Here for a Question</button>
        </p>
      </header>
    </div>
  );
}

export default App;
