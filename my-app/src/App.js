import React, { Component } from 'react';
import './App.css';
import { Search } from './Components/Search.jsx';
import { Results } from './Components/Results.jsx';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            hash: ""
        };
    }

    changeHash = (hash) => {
        this.setState({
            hash: hash
        })
    };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bitcoin Browser</h1>
        </header>
        <section className="browser-container">
            <Search sendHash = {this.changeHash}/>
            <Results hash={this.state.hash}/>
        </section>
      </div>
    );
  }
}

export default App;
