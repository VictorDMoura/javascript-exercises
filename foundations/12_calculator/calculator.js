const add = function (number1, number2) {
  return number1 + number2;
};

const subtract = function (number1, number2) {
  return number1 - number2;
};

const sum = function (array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((total, num) => total * num, 1);
};

const power = function (base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function (number) {
  const fact = function (n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * fact(n - 1);
    }
  };
  return fact(number);
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
