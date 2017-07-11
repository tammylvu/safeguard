import Web3 from 'web3';
const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]
var greeterAddress = '0x1c62d1d8852dab2e273a55a2954c0037d2cace4d';
const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);

//get Testrpc account 0 address (default account)
var addr = ETHEREUM_CLIENT.eth.accounts[0];

//get balance of account 0 in Ether
var balanceBigNum = ETHEREUM_CLIENT.eth.getBalance(addr);
var balanceInWei = balanceBigNum.plus(21).toString(10);
var balance = ETHEREUM_CLIENT.fromWei(balanceInWei, 'ether');

//get block number
var blockNum = ETHEREUM_CLIENT.eth.blockNumber;

//get hashrate
var hashrate = ETHEREUM_CLIENT.eth.hashrate;

//get gas price
var gasPrice = ETHEREUM_CLIENT.eth.gasPrice.toString(10);

export {greeterContract, addr, balance, blockNum, hashrate, gasPrice};
