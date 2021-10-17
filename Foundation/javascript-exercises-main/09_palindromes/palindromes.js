const palindromes = function (str) {

  str = str.toLowerCase()

  // Regex below will replace everything except for A-Z a-z and 0-9 with empty '',
  // g is for global and not first match
  let cleanedStr = str.replace(/[^A-Za-z0-9]/g, "");

  let strArr = cleanedStr.split("");
  // We're using slice() here to get a shallow copy before reversing bc
  // reverse() method will apply on the original itself and doesnt create a copy
  let reverseStr = strArr.slice().reverse();

  return (strArr.join() == reverseStr.join())
};

// Do not edit below this line
module.exports = palindromes;
