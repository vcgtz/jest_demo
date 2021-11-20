const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;

const division = (a, b) => {
  if (b === 0) {
    throw new Error('Zero Division');
  }

  return a / b;
}

const pow = (base, exponent) => base ** exponent;

module.exports = {
  sum,
  multiply,
  division,
  pow
};
