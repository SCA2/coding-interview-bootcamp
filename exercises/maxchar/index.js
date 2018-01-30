// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const f = str.split('').
    reduce((h, c) => { h[c] = h[c] + 1 || 1; return h }, {});

  const max = Object.entries(f).
    reduce((max, i) => i[1] > max[1] ? i : max, ['', 0]);

  return max[0];
}

module.exports = maxChar;
