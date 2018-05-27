import React, { Component } from 'react';
import '../App.css';


export class Search extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, enter the code/hash of your bitcoin transaction and click 'Search'.
                </p>
                <input type="text" placeholder="enter the code/hash here"/>
                <button>Search</button>
            </div>
        )
    }
}
