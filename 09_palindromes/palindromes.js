const filterString = function(inputString) {
    let filteredString = inputString.replace(/[^\w]/gi, '');
    return filteredString;
}

function reverseString(inputString) {
    let outputString =  inputString.split(``).reverse().join(``);
    return outputString;
}

const palindromes = function (inputString) {

    inputString = inputString.toLowerCase();

    let filteredString = filterString(inputString);

    let compareString = filteredString;

    let reversedString = reverseString(filteredString);

    return reversedString === compareString ? true : false;

};

// Do not edit below this line
module.exports = palindromes;
