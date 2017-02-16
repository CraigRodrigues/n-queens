/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  let board = new Board({n: n});

  for (let i = 0, j = 0; i < n; i++, j++) {
    board.togglePiece(i, j);
  }

  let solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  let board = new Board({n: n});
  let pieces = 0;
  let solutionCount = 0;

  debugger;
  let findSolutions = function (row, pieces, board) {
    if (pieces === n) {
      solutionCount++;
      return board;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.hasRowConflictAt(row) || board.hasColConflictAt(i)) {
        board.togglePiece(row, i);
      } else {
        findSolutions(row + 1, pieces + 1, board); 
      }
    } 
  };

  findSolutions(0, pieces, board);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};