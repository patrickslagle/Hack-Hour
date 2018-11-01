/**
 * @description - YOU ARE BOMBERMAN. You're on a board with a bunch of empty spaces and bombs.
 * You have to find the door out, represented by an 'x'. Bombs are 'o' and free spaces are '-'
 * @param {Number} numRows 
 * @param {Number} numColumns 
 * @param {Array} board - array of rows
 */
function move(numRows, numColumns, board, position) {
  if (board[position[0]][position[1]] === 'x') {
    return 0;
  }
  var possibleMoves = 0; 
  var movesToFind = Infinity; 
  // move left 
  if (position[1] > 0) {
    // spot to left is not a bomb
    if (board[position[0]][position[1] - 1] !== 'o') {
      // turn old location into a bomb, so you doesn't retrace steps; 
      const newboard = [];
      board.forEach(row => {
        newboard.push(Array.from(row))
      })
      newboard[position[0]][position[1]] = 'o'; 
      possibleMoves++; 
      movesToFind = Math.min(movesToFind, 1 + move(numRows, numColumns, newboard, [position[0], position[1] - 1]));;
    }
  }
  
  // move right
  if (position[1] < numColumns - 1) {
    if (board[position[0]][position[1] + 1] !== 'o') {
      // turn old location into a bomb, so you doesn't retrace steps; 
      const newboard = [];
      board.forEach(row => {
        newboard.push(Array.from(row))
      })
      newboard[position[0]][position[1]] = 'o'; 
      possibleMoves++; 
      movesToFind = Math.min(movesToFind, 1 + move(numRows, numColumns, newboard, [position[0], position[1] + 1]));
    }
  }
  
  // move up
  if (position[0] > 0) {
    // console.log('position in up', position)
    if (board[position[0] - 1][position[1]] !== 'o') {
      // turn old location into a bomb, so you doesn't retrace steps; 
      const newboard = [];
      board.forEach(row => {
        newboard.push(Array.from(row))
      })
      newboard[position[0]][position[1]] = 'o';  
      possibleMoves++; 
      movesToFind = Math.min(movesToFind, 1 + move(numRows, numColumns, newboard, [position[0] - 1, position[1]]));
    }
  }
  
  // move down
  if (position[0] < numRows - 1) {
    if (board[position[0] + 1][position[1]] !== 'o') {
      // turn old location into a bomb, so you doesn't retrace steps; 
      const newboard = [];
      board.forEach(row => {
        newboard.push(Array.from(row))
      })
      newboard[position[0]][position[1]] = 'o'; 
      possibleMoves++; 
      movesToFind = Math.min(movesToFind, 1 + move(numRows, numColumns, newboard, [position[0] + 1, position[1]]));
    }
  }
  // if you can't move, then return Infinity
  if (possibleMoves === 0) {
    return Infinity;
  } else {
    return movesToFind
  }
}

const board = [
  ['-', '-', '-'],
  ['-', 'o', '-'],
  ['-', 'x', '-']
]

console.log(move(3,3,board, [0,0]))
