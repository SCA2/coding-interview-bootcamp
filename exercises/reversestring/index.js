// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Array.prototype.myReverse = function() {
//   let j = 0;
//   let t = '';
//   for(let i = 0; i < this.length / 2; i++) {
//     j = this.length - i - 1;
//     t = this[i];
//     this[i] = this[j];
//     this[j] = t;
//   }
//   return this;
// };

function reverse(str) {
  // return str.split('').reverse().join('');
  // return str.split('').myReverse().join('');
  return str.split('').reduce((reverse, c) => c + reverse);
};

module.exports = reverse;
