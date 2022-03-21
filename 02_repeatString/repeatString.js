const repeatString = function(string, number) {
    if (number < 0) {
        return `ERROR`; //returns ERROR with negative numbers
    } else {
        let resultstring = ``; //by default the result is a null string
        for (i = 1; i <= number; i++) {
            resultstring += string; //result is an original string 
                                    //reteated number times
        }
        return resultstring;
    }
};

// Do not edit below this line
module.exports = repeatString;
