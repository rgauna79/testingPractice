import capitalize from './capitalize.js';

test('capitalize', () => {
  expect(capitalize('foo')).toBe('Foo');
  expect(capitalize('foo bar')).toBe('Foo bar');
  expect(capitalize('foo bar baz')).toBe('Foo bar baz');
  expect(capitalize('foo bar baz qux')).toBe('Foo bar baz qux');
});
  