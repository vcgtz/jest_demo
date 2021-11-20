const math = require('../../src/helpers/math');

test('add 1 + 2 to be equal 3', () => {
  expect(math.sum(1, 2)).toBe(3);
  expect(math.sum(1, 2)).not.toBe(4);
  expect(math.sum(1, 2)).toBeTruthy();
});

test('throw zero division error', () => {
  expect(() => math.division(10, 0)).toThrow('Zero Division');
});
