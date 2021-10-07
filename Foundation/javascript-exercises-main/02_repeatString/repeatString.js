const repeatString = function (str, repeatNum) {
  if (repeatNum < 0) {
    return "ERROR";
  }

  return str.repeat(repeatNum);
};

// Do not edit below this line
module.exports = repeatString;
