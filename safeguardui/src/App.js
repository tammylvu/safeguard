import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {safeguardContract} from './EthereumSetup';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addOracle: '',
            remOracle: '',
            chName: '',
            chPrice: 0,
            upName: '',
            upAmt: 0,
            thrName: '',
            thrPrice: 0
        }
        this.handleAddOracle = this.handleAddOracle.bind(this);
        this.handleRemOracle = this.handleRemOracle.bind(this);
        this.handleChName = this.handleChName.bind(this);
        this.handleChPrice = this.handleChPrice.bind(this);
        this.handleUpName = this.handleUpName.bind(this);
        this.handleUpAmt = this.handleUpAmt.bind(this);
        this.handleThrName = this.handleThrName.bind(this);
        this.handleThrPrice = this.handleThrPrice.bind(this);
    }

    handleAddOracle(event) {
        this.setState({addOracle: event.target.addOracle});
    }

    handleRemOracle(event) {
        this.setState({remOracle: event.target.remOracle});
    }

    handleChName(event) {
        this.setState({chName: event.target.chName});
    }

    handleChPrice(event) {
        this.setState({chPrice: event.target.chPrice});
    }

    handleUpName(event) {
        this.setState({upName: event.target.upName});
    }

    handleUpAmt(event) {
        this.setState({upAmt: event.target.upAmt});
    }

    handleThrName(event) {
        this.setState({thrName: event.target.thrName});
    }

    handleThrPrice(event) {
        this.setState({thrPrice: event.target.thrPrice});
    }

    render() {
        return (
            <div className="App">

                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Safeguard</h1>
                    <h2>Let me help you guard your money</h2>
                </div>
                <br/>


                <div className="App-methods">
                    <br/>
                    <div className="user-heading">Oracle Methods</div>
                        <br/><br/>

                        <div className="method-name">Add an Oracle:</div>
                        <br/>
                        <form>
                            <div>
                                <label>Address of Oracle:</label>
                                <input type="text" onChange={this.handleAddOracle} value={this.state.addOracle}/>
                            </div>
                            <br/>
                            <button className="button">Add Oracle</button>
                        </form>
                        <br/>

                        <div className="method-name">Remove an Oracle:</div>
                        <br/>
                        <form>
                            <div>
                                <label>Address of Oracle:</label>
                                <input type="text" onChange={this.handleRemOracle} value={this.state.remOracle}/>
                            </div>
                            <br/>
                            <button className="button">Remove Oracle</button>
                        </form>
                        <br/>

                        <div className="method-name">Report a Stock Change:</div>
                        <br/>
                        <form>
                            <div>
                                <label>Stock name:</label>
                                <input type="text" onChange={this.handleChName} value={this.state.chName}/>
                            </div>
                            <div>
                                <label>Current Price of Stock:</label>
                                <input type="number" onChange={this.handleChPrice} value={this.state.chPrice}/>
                            </div>
                            <br/>
                            <button className="button">Oraclize</button>
                        </form>
                        <br/>

                    <br/>
                    <div className="user-heading">User Methods</div>
                    <br/><br/>

                    <div className="method-name">Update User Portfolio:</div>
                    <br/>
                    <form>
                        <div>
                            <label>Stock name:</label>
                            <input type="text" onChange={this.handleUpName} value={this.state.upName}/>
                        </div>
                        <div>
                            <label>Amount of Stock held:</label>
                            <input type="number" onChange={this.handleUpAmt} value={this.state.upAmt}/>
                        </div>
                        <br/>
                        <button className="button">Update Threshold</button>
                    </form>
                    <br/>

                    <div className="method-name">Add a Stock Threshold:</div>
                    <br/>
                    <form>
                        <div>
                            <label>Name of Stock:</label>
                            <input type="text" onChange={this.handleThrName} value={this.state.thrName}/>
                        </div>
                        <div>
                            <label>Price Threshold:</label>
                            <input type="number" onChange={this.handleThrPrice} value={this.state.thrPrice}/>
                        </div>
                        <br/>
                        <button className="button">Add Threshold</button>
                    </form>
                    <br/>

                </div>
            </div>
        );
    }
}
export default App;
