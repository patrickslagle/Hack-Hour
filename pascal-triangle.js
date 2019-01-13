/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

const pascalTriangle = (num) => {
  const tri = [];
  for (let i = 0; i < num; i += 1) {
    if (i === 0) tri.push([1]);
    else if (i === 1) tri.push([1, 1]);
    else {
      const row = [1];
      const lastRow = tri[tri.length - 1];
      for (let j = 0; j < lastRow.length - 1; j += 1) {
        row.push(lastRow[j] + lastRow[j + 1]);
      }
      row.push(1);
      tri.push(row);
    }
  }
  return tri;
};

console.log(pascalTriangle(6));
