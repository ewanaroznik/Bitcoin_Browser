import React, { Component } from 'react';
import '../App.css';

export class Results extends Component {

        constructor(props) {
            super(props);
            this.state = {
                addresses : [],
                block_hash: '',
                size: '',
            };
        }

    componentDidUpdate(prevProps, prevState){

            fetch('https://api.blockcypher.com/v1/btc/main/txs/' + this.props.hash)
                .then(r => r.json())
                .then(data => {
                    this.setState({
                        block_hash: data.block_hash,
                        addresses : data.addresses,
                        size: data.size,
                        received: data.received
                    });
                });
        }
        render(){
            return (
                <div className="results-container" >
                    <h1>{this.state.block_hash}</h1><br/>
                    <ul>{this.state.addresses}</ul>
                    <h1>{this.state.size}</h1><br/>
                </div>
             )
        }
}

//f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449


