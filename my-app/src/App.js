import React, { Component } from 'react';
import './App.css';
import { Search } from './Components/Search.jsx';
import { Results } from './Components/Results.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bitcoin Browser</h1>
        </header>
        <Search />
          <Results hash="f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449"/>
      </div>
    );
  }
}

export default App;
