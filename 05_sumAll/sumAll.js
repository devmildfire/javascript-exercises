const isValidArgument = function(argument) {
    if (typeof argument === `number` &&             // if `argument` is a number
       (Math.floor(Math.abs(argument)) === argument) ) { // and a positive integer
        return true;                                // it is valid
    } else {
        return false; 
    }
}



const sumAll = function(firstNumber, secondNumber) {

    if ( !isValidArgument(firstNumber) ||       // if either of arguments is
         !isValidArgument(secondNumber) ) {     // not valid
        return `ERROR`;                         // then it is an ERROR output
    } else {
        return summ = (  Math.abs(firstNumber - secondNumber) + 1  ) *  
               (firstNumber + secondNumber)/2;  // S = (n1 + n2)*N/2
    }

};

// Do not edit below this line
module.exports = sumAll;
