// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   const sign = n < 0 ? -1 : 1;
//   let reverse = 0;
//   n = Math.abs(n);
//   while(n > 0) {
//     reverse = reverse * 10 + n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sign * reverse;
// }

function reverseInt(n) {
  const sign = n < 0 ? -1 : 1;
  const s = n.toString().split('').reverse().join('');
  return parseInt(s) * sign;
}

module.exports = reverseInt;
