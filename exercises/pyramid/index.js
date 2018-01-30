// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 1, step = '') {
  if(row > n) return;

  let width = n * 2 - 1;
  let pad = n - row;

  if(step.length == width) {
    console.log(step);
    return pyramid(n, row + 1);
  }

  if(step.length < pad || step.length >= width - pad) {
    return pyramid(n, row, step + ' ');
  }

  return pyramid(n, row, step + '#');
}

// function pyramid(n) {
//   let width = - 1;
//   for(let i = 0; i < n; i++) {
//     width += 2;
//     let pad = n - i - 1;
//     console.log(' '.repeat(pad) + '#'.repeat(width) + ' '.repeat(pad));
//   }
// }

module.exports = pyramid;
