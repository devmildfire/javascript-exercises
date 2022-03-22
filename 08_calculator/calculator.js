const add = function(number_one, number_two) {
	return result = number_one + number_two;
};

const subtract = function(number_one, number_two) {
  return result = number_one - number_two;
};

const sum = function(inputArray) {
	let result = 0;
  for (i = 0; i < inputArray.length; i++) {
    result += inputArray[i];
  }
  return result;
};

const multiply = function(inputArray) {
  let result = inputArray[0];
  for (i = 1; i < inputArray.length; i++) {
    result *= inputArray[i];
  }
  return result;
};

const power = function(number, power) {
	if (power === 0) {
    return 1;
  } else {
    let result = number;
    for (i = 1; i < power; i++) {
      result *= number;
    }
    return result;
  }

};

const factorial = function(number) {
  if (number === 1 || number === 0) {
    return 1;   // 0! and 1! are both equal to 1
  }
  let result = number;
  result *= factorial(number - 1);
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
