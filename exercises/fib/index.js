// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  if(n == 0) return 0;
  if(n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const results = {};
  return function(...args) {
    if(results[args]) return results[args];
    return results[args] = fn.apply(this, args);
  }
}

fib = memoize(fib);

// function fib(n, fibs = []) {
//   if(n < 2) return n;
//   if(fibs[n]) return fibs[n];
//   return fibs[n] = fib(n - 1, fibs) + fib(n - 2, fibs);
// }

// function fib(n) {
//   const fibs = [0, 1];
//   for(let i = 2; i <= n; i++) {
//     const a = fibs[i - 2];
//     const b = fibs[i - 1];
//     fibs[i] = a + b;
//   }
//   return fibs[n]
// }


module.exports = fib;
