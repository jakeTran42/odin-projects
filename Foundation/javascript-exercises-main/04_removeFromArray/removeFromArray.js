const removeFromArray = function (...args) {
  givenArr = args.splice(0, 1)[0];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < givenArr.length; j++) {
      if (args[i] === givenArr[j]) {
        givenArr.splice(j, 1);
      }
    }
  }

  return givenArr;
};

// Do not edit below this line
module.exports = removeFromArray;
