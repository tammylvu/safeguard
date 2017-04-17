pragma solidity ^0.4.8;
contract Greeter {
 string greeting; //class variable that our greeter will say when poked
function greeter(string _greeting) public { //sets class variable to argument
  greeting = _greeting;
 }
function greet() constant returns (string) { //poking function
  return greeting;
 }
}
