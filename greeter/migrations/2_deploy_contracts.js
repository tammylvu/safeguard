var Greeter = artifacts.require("./Greeter.sol"); //creates a variable
module.exports = function(deployer) { // exports and deploys greeter
  deployer.deploy(Greeter);
};
