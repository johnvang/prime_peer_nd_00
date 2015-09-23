var randomNumber = require('./module1');
var toUSD = require('./module2');

var amount = function(){
    return(toUSD(randomNumber()));
}
var text = function(){
    var balance = "Account Balance: \n"
    return balance;
}

exports.amount = amount;
exports.text = text;