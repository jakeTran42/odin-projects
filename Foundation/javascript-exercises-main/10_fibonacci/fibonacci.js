const fibonacci = function (fib) {
  if (fib < 0) {
    return "OOPS";
  } else if (fib == 0) {
    return 0;
  } else if (fib == 1 || fib == 2) {
    return 1;
  }

  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  for (let i = 3; i <= fib; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
