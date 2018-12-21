//23280692718581
// inputStr = awaglknagawunagwkwagl
// num = 4

// Constraints
// 0 <= num <= 26


// accepts string of lowercase letters and a number between 0 and 26.
// returns an array of unique substrings
// each substring must also only contain unique, non-replicated letters
function subStringsKDist(inputStr, num) {
  const substrings = [];
  // iterate through inputStr, checking each iteration for unique substring
  for (let i = 0; i <= inputStr.length - num; i += 1) {
    const letters = {}; // contains letters of substring
    let pointer = i;
    let substring = '';
    let currLetter = inputStr[pointer];
    // iterate from i to i + num (the substring length), unless duplicate letter found
    while (!letters[currLetter] && pointer < i + num) {
      substring += currLetter;
      pointer += 1;
      letters[currLetter] = 1;
      currLetter = inputStr[pointer];
    }
    // if there was no duplicate letters, and substring is unique, add to substrings
    if (substring.length === num && !substrings.includes(substring)) {
      substrings.push(substring);
    }
  }
  return substrings;
}
