import reverseString from './reverseString';

test('reverseString', () => {
  expect(reverseString('foo')).toBe('oof');
  expect(reverseString('foo bar')).toBe('raboof');
  expect(reverseString('foo bar baz')).toBe('zabraboof');
  expect(reverseString('foo bar baz qux')).toBe('xuqzabraboof');
});