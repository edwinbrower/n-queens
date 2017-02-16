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

////////////////////////////////////////////////////////////////////////////////

  // setup note
  // whether we should count (1,2) and (2,1) separately
  // we think : return solutionFound / (n!);

//////////////////////////////////////////////////////////////////////////////
window.NRooksSolutionCount = 0;
window.NQueensSoltionCount = 0;

window.factorial = function(n) {
  if (n > 0) {
    return n * factorial(n - 1);
  } else {
    if (n === 0) {
      return 1;
    }
  }
};

window.boardToMatrix = function(board) {
  var result = [];
  for (var i = 0; i < board.get('n'); i++) {
    result.push(board.get(i));
  }
  return result;
};

window.findNRooksSolution = function(n) {

  var initBoard = new Board({n: n});
  var solutionBoard;
  // recursive function
  var NRooksSolutionCount = 0;
  var searchForPlace = function(board, round, rooks) {
    // base case
    debugger;
    var placedRooks = rooks;

    for (var i = 0; i < n; i++) {
      // var rowMatrix = boardToMatrix(board);
      // //var workingBoard = new Board({n: n});
      // //workingBoard = board;
      // var rowBoard = new Board(rowMatrix);
        
      for (var j = 0; j < n; j++) {
        // var columnBoard = boardToMatrix(rowBoard);
        // //var workingBoard = new Board({n: n});
        // //workingBoard = board;
        // var workingBoard = new Board(columnBoard);

        var workingBoard = board;
        if (workingBoard.get(i)[j] === 1) {
          continue;
        }
        workingBoard.get(i)[j] = 1;
        placedRooks++;
        if (workingBoard.hasAnyRooksConflicts()) {
          workingBoard.get(i)[j] = 0;
          placedRooks--;
          continue;
        }

        //recursive case
        if (round > 1) {
          searchForPlace(workingBoard, round - 1, placedRooks);
        } 
        // if (round === 1) {
        //   searchForPlace(workingBoard, round - 1, placedRooks);
        // }
        if (placedRooks === n) {
          NRooksSolutionCount++;
          solutionBoard = workingBoard;
          //board = new Board({n: n});
          //return board;
        }//  else {
        //   board = new Board({n: n});
        // }
        //board.get(i)[j] = 0;
      }
    }
  };
  searchForPlace(initBoard, n, 0);

  // var solution = [];
  // for (var i = 0; i < n; i++) {
  //   //debugger;
  //   solution.push(solutionBoard.get(i));
  // }

  var solution = boardToMatrix(solutionBoard);



  // if (placedRooks < 4)  NOPE
  // if (placedRooks === 4) WOOT! also count increases and stop
  //
/* 
  solutions[i][j] = 1;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution[i][j] = 1;
      placedRooks++;
      // recursion!!!!
      searchForPlace(solution);
    }
  }

  check (arrayofposs)
    for arrayofposs length
      placeRook - --- solution[i][j] = 1;
      placedRooks++
      var newarrayposss 
      for (arrayofposs lenth)
        if noconflict then push the recursive newarrayofposs
      check(newarrayofposs)

  this.NRooksSolutionCount++;
*/
  window.NRooksSolutionCount = NRooksSolutionCount;
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  window.findNRooksSolution(n);
  var solutionCount = window.NRooksSolutionCount; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount / (this.factorial(n));
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
  return solutionCount / this.factorial(n);
};

















