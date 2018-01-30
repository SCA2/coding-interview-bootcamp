// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  const out = [,,'fizz',,'buzz','fizz',,,'fizz','buzz',,'fizz',,,'fizzbuzz'];
  for(let i = 0; i < n; i++) {
    console.log(out[i % 15] || i + 1);
  }
}

module.exports = fizzBuzz;
