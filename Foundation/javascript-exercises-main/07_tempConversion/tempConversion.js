// toFix will round the number to nearest 10th and parseFloat will get rid of trailing 0 if the number happen
// to be whole number

const ftoc = function (fahrenheit) {
  let celsiusConverted = ((fahrenheit - 32) * 0.5556).toFixed(1);
  return parseFloat(celsiusConverted);
};

const ctof = function (celsius) {
  let fahrenheitConverted = (celsius * 1.8 + 32).toFixed(1);
  return parseFloat(fahrenheitConverted);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
