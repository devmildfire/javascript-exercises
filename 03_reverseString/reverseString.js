const reverseString = function(inputString) {
    let charArray = []; // an empty array to hold characters of the input string
                        // as its items for reversal
    for (i = 0; i < inputString.length; i++) {
        charArray[i] = inputString.charAt(i); // fill array with characters of
                                              // the input string
    }
    charArray.reverse();
    let outputString = charArray.join(``); //produce a string out of array
                                           // without separators
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
