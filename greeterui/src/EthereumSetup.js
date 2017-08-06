// import web3: https://github.com/ethereum/wiki/wiki/JavaScript-API
import Web3 from 'web3';

// instantiate web3
// creates a new web3 object using the testrpc instance we are running in the background
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

// set greeter's ABI (Application Binary Interface)
var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]

// this should be the address of the mined Greeter contract on testrpc after truffle migrate
var greeterAddress = '0x9b1f7f645351af3631a656421ed2e40f2802e6c0';

// creates a greeterContract variable that we can use to call Greeter.sol methods
const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);

/* TASK 1:
 * get block number
 */
var blockNum =

/* TASK 2:
 * get hashrate
 */
var hashrate =

/* TASK 3:
 * get gas price
 */
var gasPrice =

/* TASK 4:
 * Get the balance of your default account.
 * You may not need all variables
 */
 
// get Testrpc account 0 address (default account)
var addr =
// get balance of account 0 in Ether
// HINT: the web3 getBalance function returns a BigNumber but we want the balance in Ether
var balanceBigNum =
var balanceInWei =
var balance =

export {greeterContract, addr, balance, blockNum, hashrate, gasPrice};
