import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {greeterContract, acct, balance, blockNum, hashrate, gasPrice} from './EthereumSetup';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            greeting: "Hello",
            acct: acct,
            balance: balance,
            blockNum: blockNum,
            hashrate: hashrate,
            gasPrice: gasPrice
        }
    }

    componentWillMount() {
        var data = greeterContract.greet()
        this.setState({
            greeting: String(data)
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>I am Greeter</h2>
                </div>
                <h3>I would like to say: "{this.state.greeting}"</h3>
                <h3>Your account is: {this.state.acct}</h3>
                <h3>Your balance is: {this.state.balance} ether</h3>
                <h3>Latest block number: #{this.state.blockNum}</h3>
                <h3>Block hashrate: #{this.state.hashrate} hashes per second</h3>
                <h3>Current gas price: #{this.state.gasPrice} wei</h3>
            </div>
        );
    }
}
export default App;
