// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   let side = n;
//   let c = -1;
//   let r = -1;
//   let count = 0;
//   let spiral = [...Array(n).keys()].map(()=>[]);

//   while(count < n * n) {
//     r += 1; c += 1;
//     for(let i = 0; i < side; i++) {
//       spiral[r][c++] = ++count;
//     }

//     side -= 1; r += 1; c -= 1;
//     for(let i = 0; i < side; i++) {
//       spiral[r++][c] = ++count;
//     }

//     r -= 1; c -= 1;
//     for(let i = 0; i < side; i++) {
//       spiral[r][c--] = ++count;
//     }

//     side -= 1; r -= 1; c += 1;
//     for(let i = 0; i < side; i++) {
//       spiral[r--][c] = ++count;
//     }

//   }
//   return spiral;
// }

const legal = (n, r, c, spiral) => {
  return r >= 0 && r < n && c >= 0 && c < n && !spiral[r][c];
};

function matrix(n, r=0, c=0, i=0, spiral=[...Array(n).keys()].map(()=>[])) {
  if(n == 0) { return spiral; }

  while(legal(n, r, c, spiral)) {
    spiral[r][c++] = ++i;
  }
  r++, c--;

  while(legal(n, r, c, spiral)) {
    spiral[r++][c] = ++i;
  }
  r--, c--;

  while(legal(n, r, c, spiral)) {
    spiral[r][c--] = ++i;
  }
  r--, c++;

  while(legal(n, r, c, spiral)) {
    spiral[r--][c] = ++i;
  }
  r++, c++;

  return matrix(n - 1, r, c, i, spiral);
}

// matrix(2);

// function matrix(n, r=0, c=0, i=0) {
//   let spiral = [...Array(n).keys()].map(()=>[]);

//   while(i < n * n) {
//     while(legal(n, r, c, spiral)) {
//       spiral[r][c++] = ++i;
//     }
//     r += 1; c -= 1;

//     while(legal(n, r, c, spiral)) {
//       spiral[r++][c] = ++i;
//     }
//     r -= 1; c -= 1;

//     while(legal(n, r, c, spiral)) {
//       spiral[r][c--] = ++i;
//     }
//     r -= 1; c += 1;

//     while(legal(n, r, c, spiral)) {
//       spiral[r--][c] = ++i;
//     }
//     r += 1; c += 1;
//   }
//   return spiral;
// }

module.exports = matrix;
