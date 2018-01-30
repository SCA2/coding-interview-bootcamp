const fib = require('./index');

test('Fib function is defined', () => {
  expect(typeof fib).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fib(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fib(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fib(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fib(4)).toEqual(3);
});

test('calculates correct fib value for 42', () => {
  expect(fib(42)).toEqual(267914296);
});

test('calculates correct fib value for 50', () => {
  expect(fib(50)).toEqual(12586269025);
});

test('calculates correct fib value for 15', () => {
  expect(fib(100)).toEqual(354224848179262000000);
});
