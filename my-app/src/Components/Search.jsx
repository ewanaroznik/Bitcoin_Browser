import React, { Component } from 'react';
import '../App.css';


export class Search extends Component {


    handleHashChange(e) { this.props.sendHash(e.target.value); };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, enter the code/hash of your bitcoin transaction and click 'Search'.
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.hash} onChange={(e) => this.props.sendHash(e.target.value)} placeholder="enter the code/hash here"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
