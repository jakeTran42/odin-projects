const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let arrLength = arr.length;

  if (arrLength < 2) {
    if (arrLength == 0) {
      return 0;
    }
    return arr[0];
  }

  let sum = 0;

  for (let i = 0; i < arrLength; i++) {
    sum += arr[i];
  }

  return sum;
};

const multiply = function (arr) {
  let arrLength = arr.length;

  if (arrLength < 2) {
    if (arrLength == 0) {
      return 0;
    }
    return arr[0];
  }

  let product = 1;

  for (let i = 0; i < arrLength; i++) {
    product *= arr[i];
  }

  return product;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num == 0 || num == 1) {
    return 1;
  }

  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
