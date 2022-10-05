// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Diff Two Arrays</h1>`;

/** TODO:
 * Compare two arrays and return a new array with any items only found in one of the two arrays, but not both.  In other words, return the symmetric difference of the two arrays.
 * NOTE: You can return the array with its elements in any order.
 * 
 function diffArray(arr1, arr2) {
   const newArr = [];
   return newArr;
 }
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
 */

function diffArray(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
    ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
  )
);
console.log(
  diffArray(
    ['andesite', 'grass', 'dirt', 'dead shrub'],
    ['andesite', 'grass', 'dirt', 'dead shrub']
  )
);
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]));
console.log(diffArray([], ['snuffleupagus', 'cookie monster', 'elmo']));
console.log(diffArray([1, 'calf', 3, 'piglet'], [7, 'filly']));
