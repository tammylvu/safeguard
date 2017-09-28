// import web3: https://github.com/ethereum/wiki/wiki/JavaScript-API
import Web3 from 'web3';

// instantiate web3
// creates a new web3 object using the testrpc instance we are running in the background
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));

// set greeter's ABI (Application Binary Interface)
var safeguardABI = [ { constant: false, inputs: [ [Object], [Object] ], name: 'addThreshold', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [ [Object], [Object] ], name: 'updatePortfolio', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [ [Object] ], name: 'addUser', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [ [Object], [Object] ], name: 'oraclize', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [ [Object] ], name: 'addOracle', outputs: [], payable: false, type: 'function' }, { constant: false, inputs: [ [Object] ], name: 'removeOracle', outputs: [], payable: false, type: 'function' }, { anonymous: false, inputs: [ [Object], [Object] ], name: 'Sell', type: 'event' } ]
// this should be the address of the mined Greeter contract on testrpc after truffle migrate
var safeguardAddress = '0x1a871f96b371bdb79958692b5cf5a0247b7037e9ba262b00b76b926bcb359b58';

// uses web3 api to find a contract with the greeterABI at the greeterAddress on the current network
const safeguardContract = web3.eth.contract(safeguardABI).at(safeguardAddress);


export {safeguardContract};
