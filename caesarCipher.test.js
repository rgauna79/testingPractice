// caesarCipher.test.js

import caesarCipher from './caesarCipher'; // Adjust the path accordingly

test('Caesar Cipher with positive shift', () => {
  expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('Caesar Cipher with negative shift', () => {
  expect(caesarCipher('xyz', -1)).toBe('wxy');
});

test('Caesar Cipher with large positive shift', () => {
  expect(caesarCipher('abc', 28)).toBe('cde'); // 28 % 26 === 2
});

test('Caesar Cipher with mixed case', () => {
  expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
});

test('Caesar Cipher with non-alphabetic characters', () => {
  expect(caesarCipher('123!@#', 5)).toBe('123!@#');
});
