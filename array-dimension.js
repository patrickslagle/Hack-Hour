// The dimension of an array is defined as the number of indices needed to select an
// element (e.g. [] has 1 dimension, [[1]] has 2 dimensions, [[2], [2, [3]]] has 3 dimensions).
// Implement a function that takes a JSON formatted string as input and returns the
// dimension of the array. For example the input string “[1]” should return 1. Non-string
// input, invalid JSON or input that represents non-array data types should be treated as
// invalid. How performant is this function?

/**
 * @description - Takes array formatted as a JSON string, and returns the dimension of the string
 * Time complexity is 0(n) since both JSON.parse and a for loop are individually 0(n)
 * @param {string} array - An array converted to a JSON formatted string
 * @returns {number} - returns the dimension of an array
 */
function findDimension(array) {
  // confirm input is a string and an array
  if (typeof array !== 'string') return 'invalid input - not a string'
  if (array[0] !== '[') return 'invalid input - not an array'

  // check if input is JSON
  try {
    JSON.parse(array);
  } catch (e) {
    return 'invalid input - not JSON';
  }
  
  let dimension = 0; //track array dimension
  const bracketTracker = []; //track of open left brackets
  
  // interate through array to find array dimension
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === '[') {
      bracketTracker.push('[')
      // if there are more open left brackets than current dimension, then set dimension to new dimension.
      dimension = Math.max(bracketTracker.length, dimension);
    }
    if (array[i] === ']') {
      bracketTracker.pop(); 
    }
  }
  return dimension
}
