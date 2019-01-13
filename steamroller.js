// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr) {
  // I'm a steamroller, baby
  let test = []
  arr.forEach((ele) => {
    if (Array.isArray(ele)) test = test.concat(steamrollArray(ele));
    else test.push(ele);
  });
  return test;
}

console.log([].concat(...[1, [2]]))

console.log(steamrollArray([1, [2], {}, [3, [[4]]]]));