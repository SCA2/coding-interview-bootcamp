// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const subarrays = [];
//   let sub = [];

//   array.forEach(e => {
//     sub.push(e);
//     if(sub.length == size) {
//       subarrays.push(sub);
//       sub = [];
//     }
//   });

//   if(sub.length) { subarrays.push(sub) };

//   return subarrays;
// }

// function chunk(array, size) {
//   let sub = [];

//   return array.reduce((subarrays, e, i) => {
//     sub.push(e);
//     if(sub.length == size || i == array.length - 1) {
//       subarrays.push(sub);
//       sub = [];
//     }
//     return subarrays;
//   }, []);
// }

function chunk(array, size) {
  const subarrays = [];
  for(let i = 0; i < array.length; i += size) {
    subarrays.push(array.slice(i, i + size));
  };
  return subarrays;
}

module.exports = chunk;
