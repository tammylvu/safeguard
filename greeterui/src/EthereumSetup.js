import Web3 from 'web3';
const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]
var greeterAddress = '0x29feae692fa0b43b632bf369309d8f475a170160';
const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);
export {greeterContract};
