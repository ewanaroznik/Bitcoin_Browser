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

    componentDidUpdate(){

            fetch('https://api.blockcypher.com/v1/btc/main/txs/' + this.props.hash)
                .then(r => r.json())
                .then(data => {
                    this.setState({
                        block_hash: data.block_hash,
                        size: data.size,
                    });
                });
        }
        render(){
            return (
                <div>
                    <h1>{this.state.block_hash}</h1><br/>

                    <h1>{this.state.size}</h1><br/>
                </div>
             )
        }
}
/*
addresses : data.addresses,
let addressesListElements = this.state.addresses;
<ul>{addressesListElements.map(item=><li>{item}</li>)}</ul>
*/