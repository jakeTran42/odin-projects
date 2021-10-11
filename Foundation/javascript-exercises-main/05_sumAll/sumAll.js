const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }

  let startNumber = isOneLarger(num1, num2) ? num2 : num1;
  let endNumber = isOneLarger(num1, num2) ? num1 : num2;

  return calculateSumAll(startNumber, endNumber);
};

// HELPER FUNCTIONS

function isOneLarger(num1, num2) {
  return num1 > num2;
}

function calculateSumAll(start, end) {
  let sum = start;

  while (start < end) {
    sum = sum + (start + 1);
    start++;
  }

  return sum;
}

// Do not edit below this line
module.exports = sumAll;
