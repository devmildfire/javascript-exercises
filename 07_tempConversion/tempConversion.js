const ftoc = function(temp) {
  let celsius = (temp - 32)*5/9;
  if (celsius % 1 == 0) {
    return celsius;
  } else {
    return Number(celsius.toFixed(1));
  }
};

const ctof = function(temp) {
  let fahrenheit = (temp*9/5) + 32;
  if (fahrenheit % 1 == 0) {
    return fahrenheit;
  } else {
    return Number(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
