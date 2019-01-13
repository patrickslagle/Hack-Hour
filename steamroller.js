// Flatten a nested array. You must account for varying levels of nesting.

// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

function steamrollArray(arr) {
  return arr.reduce((ac, cv) => {
    if (Array.isArray(cv)) return (ac.concat(steamrollArray(cv)));
    ac.push(cv);
    return ac;
  }, []);
}

console.log(steamrollArray([1, [2], {}, [3, [[4]]]]));