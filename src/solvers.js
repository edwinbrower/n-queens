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
window.NRooksSolutionCount = 0;
window.NQueensSolutionCount = 0;

window.findNRooksSolution = function(n) {
  var initBoard = new Board({n: n});
  var solutionBoards = [];
  var NRooksSolutionCount = 0;
  var searchForPlace = function(board, rows) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(rows, i);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(rows, i);
        continue;
      }
      //recursive case
      if (rows < n - 1) {
        rows++;
        searchForPlace(board, rows);
        rows--;
        board.togglePiece(rows, i);
      } else {
        NRooksSolutionCount++;
        var tempMatrix1 = board.rows();
        var tempBoard = new Board({n: n});
        var tempMatrix2 = tempBoard.rows();
        for (var m = 0; m < n; m++) {
          for (var l = 0; l < n; l++) {
            tempMatrix2[m][l] = tempMatrix1[m][l];
          }
        }
        solutionBoards.push(tempMatrix2);
        board.togglePiece(rows, i);
      }
    }
  };
  searchForPlace(initBoard, 0);
  var solution = solutionBoards[0];
  window.NRooksSolutionCount = NRooksSolutionCount;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  window.findNRooksSolution(n);
  var solutionCount = window.NRooksSolutionCount; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var initBoard = new Board({n: n});
  var solutionBoards = [];
  var NQueensSolutionCount = 0;
  var searchForPlace = function(board, rows) {
    for (var i = 0; i < n; i++) {
      board.togglePiece(rows, i);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(rows, i);
        continue;
      }
      //recursive case
      if (rows < n - 1) {
        rows++;
        searchForPlace(board, rows);
        rows--;
        board.togglePiece(rows, i);
      } else {
        NQueensSolutionCount++;
        var tempMatrix1 = board.rows();
        var tempBoard = new Board({n: n});
        var tempMatrix2 = tempBoard.rows();
        for (var m = 0; m < n; m++) {
          for (var l = 0; l < n; l++) {
            tempMatrix2[m][l] = tempMatrix1[m][l];
          }
        }
        solutionBoards.push(tempMatrix2);
        board.togglePiece(rows, i);
      }
    }
  };
  searchForPlace(initBoard, 0);
  var solution = solutionBoards[0] || [];
  if (solutionBoards.length === 0) {
    var edgeBoard = new Board({n: n});
    return edgeBoard.rows();
  }
  window.NQueensSolutionCount = NQueensSolutionCount;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  window.findNQueensSolution(n);
  var solutionCount = window.NQueensSolutionCount;
  if (n === 0) {
    solutionCount = 1;
  } else if (n === 2 || n === 3) {
    solutionCount = 0;
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};