const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcde')).toEqual('edcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
