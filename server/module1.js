var randomNumber = function(){
    var randomNumberString = (Math.floor((Math.random() * 1000000) + 100)).toString();
    return randomNumberString;
}

module.exports = randomNumber;