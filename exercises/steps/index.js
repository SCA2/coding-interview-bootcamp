// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, i = 1, step = '#') {
  if(i <= n) {
    if(step.length === n) {
      console.log(step);
      return steps(n, i + 1);
    } else if(step.length < i) {
      return steps(n, i, step + step[0])
    } else {
      return steps(n, i, step + ' ')
    }
  }
}

// function steps(n) {
//   for(let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i).padEnd(n, ' '));
//   }
// }

module.exports = steps;
