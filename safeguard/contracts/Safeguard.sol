pragma solidity 0.4.15;
/* Safeguard is a decentralized application that automatically
sells a user's stock when it dips below a certain threshold (price)
set by the user.

There is an oracle function where a person that is in an approved list
of addresses can submit information about the current stock market.

There are users that can set what price thresholds they want to sell
each stock at.  It would be an all or nothing in that they sell all 
of their stock.

There is only one contract, but multiple users that can call the
contract for different purposes.

There are two actors on this contract: a user and an oracle.*/

contract Safeguard {
    /*keeps information about user -> stocks they own and how much 
    of the stock */
    mapping (address => Portfolio) private userPortfolios;

    /*every stock owned and its amount*/
    struct Portfolio {
        mapping (string => uint) portfolio;
        uint noOfStocks;
        bool exists;
    }
   
    /*keeps information about a user and their thresholds for each
    stock*/
    mapping (address => ThresholdPortfolio) private userThresholds;

    /*every stock owned and their threshold price */
    struct ThresholdPortfolio {
        mapping (string => uint) thresholdPortfolio;
        bool exists;
    }

    /*all of the verified oracles*/
    address[] private acceptedOracles;

    /*all of the users*/
    address[] private users;

    /*when the contract sells all specific stock of a user*/
    event Sell(string stock, uint amount);

    /*oracle list doesn't contain this sender*/
    modifier notContainOracle(address a) {
        bool has = false;
        for (uint i = 0; i < acceptedOracles.length; i++) {
            if (acceptedOracles[i] == a) {
                has = true;
            }
        }
        require(!has);
        _;
    }

    /*oracle list does contain this sender*/
    modifier containsOracle(address a) {
        bool has = false;
        for (uint i = 0; i < acceptedOracles.length; i++) {
            if (acceptedOracles[i] == a) {
                has = true;
            }
        }
        require(has);
        _;
    }

    /*add a trusted oracle*/
    function addOracle(address a) notContainOracle(a) {
        acceptedOracles.push(a);
    }

    /*revoke an oracle's rights*/
    function removeOracle(address a) {
        for (uint i = 0; i < acceptedOracles.length; i++) {
            if (acceptedOracles[i] == a) {
                delete acceptedOracles[i];
            }
        }   
    }

    /*add a stock threshold*/
    function addThreshold(string stock, uint price) {
        addUser(msg.sender);
        ThresholdPortfolio storage currThresPort = userThresholds[msg.sender];
        if (currThresPort.exists) {
            currThresPort.thresholdPortfolio[stock] = price;
            currThresPort.exists = true;
        }
    }

    /*oracle reports change in price of stock*/
    function oraclize(string stock, uint currPrice) 
    containsOracle(msg.sender) 
    {
        ThresholdPortfolio storage currThresPort = userThresholds[msg.sender];
        Portfolio storage currPort = userPortfolios[msg.sender];
        /*loop through all users for this stock and sell all of their 
        stocks if necessary */
        for(uint i = 0; i < users.length; i++) {
            /*make sure user has stock in portfolios, has enough stock
            to sell, and the price is less than the threshold*/
            if (currThresPort.exists &&
                currPort.exists &&
                currPort.portfolio[stock] > 0 &&
                currPrice < currThresPort.thresholdPortfolio[stock]) 
            {
                Sell(stock, currPort.portfolio[stock]);
                /*when the user sells, they no longer have those stocks*/
                currPort.portfolio[stock] = 0;
                /*update noOfStocks of that user*/
                currPort.noOfStocks -= currPort.portfolio[stock];
                /*deletes the user from user array if no stocks left*/
                if (currPort.noOfStocks <= 0) {
                    currPort.exists = false;
                    for (uint j = 0; j < users.length; j++) {
                        if (msg.sender == users[j]) {
                            delete users[j];
                        }
                    }
                }
            }
        }
    }

    /*add to user holdings*/
    function updatePortfolio(string stock, uint amount) {
        addUser(msg.sender);
        Portfolio storage currPort = userPortfolios[msg.sender];
        currPort.portfolio[stock] += amount;
        currPort.noOfStocks += amount;
        currPort.exists = true;
    }

    /*add user if not in user array already*/
    function addUser(address a) internal {
        bool hasUser = false;
        for (uint i = 0; i < users.length; i++) {
            if (msg.sender == users[i]) {
                hasUser = true;
            }
        }
        if (!hasUser) {
            users.push(a);
        }
    }
}

/* functions:
(internal)
addUser(address): add user if not in user array already

updatePortfolio(string stock, uint amount): add to user 
holdings
addThreshold(string stock, uint price): add a stock 
threshold

oraclize(string stock, uint currPrice): oracle reports 
change in price of stock
removeOracle(address a): revoke an oracle's rights
addOracle(address a): add a trusted oracle

*/