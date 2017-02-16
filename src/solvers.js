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

window.findNRooksSolution = function(n) {
  var solution = []; //fixme
  var placedRooks = 0;
  for (var i = 0; i < n; i++) {
    solution.push([]);
    for (var j = 0; j < n; j++) {
      solution[i].push(0);
    }
  }
  //console.log(solution);

  // recursive function
  var searchForPlace = function(board, round) {
    // base case
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (!this.hasAnyRooksConflicts) {
          board[i][j] = 1;
          placedRooks++;
          if (round > 1) {
            searchForPlace(board, round - 1);
          }
        }
      }
    }
    if (placedRooks === n) {
      window.NRooksSolutionCount++;
      return board;
    }
    // recursion case
  /*  

  */
  };
  solution = searchForPlace(solution, n);

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
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  window.findNRooksSolution(n);
  var solutionCount = window.NRooksSolutionCount; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount / this.factorial(n);
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

















