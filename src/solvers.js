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

  let findSolutions = function (row, pieces) {
    if (pieces === n) {
      solutionCount++;
      return board;
    }
    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.hasRowConflictAt(row) || board.hasColConflictAt(i)) {
        board.togglePiece(row, i);
      } else {
        findSolutions(row + 1, pieces + 1); 
        board.togglePiece(row, i);
      }
    } 
  };

  findSolutions(0, pieces);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let board = new Board({n: n});
  let pieces = 0;
  let solution;

  if (n === 0 || n === 2 || n === 3) {
    return board.rows();
  }

  if (n === 1) {
    board.togglePiece(0, 0);
    return board.rows();
  }

  let findSolutions = function (row, pieces) {
    if (pieces === n) {
      if (solution !== undefined) {
        return;
      } else {
        solution = board.rows();
        solution = JSON.stringify(solution);
        solution = JSON.parse(solution);
        
        return;
      }
    }

    for (let i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (board.hasAnyQueenConflictsOn(row, i)) {
        board.togglePiece(row, i);
      } else {
        findSolutions(row + 1, pieces + 1); 
        board.togglePiece(row, i);
      }
    } 
  };

  findSolutions(0, pieces);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  let board = new Board({n: n});
  let pieces = 0;
  let solutionCount = 0;

  let findSolutions = function (row, pieces) {
    if (pieces === n) {
      solutionCount++;
      return board;
    }
    for (let i = 0; i < n; i++) {
      // IF at (0, 0) skip this position
      if (n % 2 === 0 && row === 0 && i === 0 && n < 8) {
        i++;
      }
      board.togglePiece(row, i);
      if (board.hasAnyQueenConflictsOn(row, i)) {
        board.togglePiece(row, i);
      } else {
        findSolutions(row + 1, pieces + 1); 
        board.togglePiece(row, i);
      }
    } 
  };

  findSolutions(0, pieces);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};