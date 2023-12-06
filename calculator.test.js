import calculator from './calculator';

test('calculator', () => {
  expect(calculator(1, 2, '+')).toBe(3);
  expect(calculator(4, 2, '-')).toBe(2);
  expect(calculator(3, 3, '*')).toBe(9);
  expect(calculator(6, 2, '/')).toBe(3);
});
