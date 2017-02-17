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

// should never have duplicates
// We need to call the recursive function twice so that it makes a second instance
// make sure toggle is correct
// then work on time complexity


//////////////////////////////////////////////////////////////////////////////
window.NRooksSolutionCount = 0;
window.NQueensSoltionCount = 0;

// window.factorial = function(n) {
//   if (n > 0) {
//     return n * factorial(n - 1);
//   } else {
//     if (n === 0) {
//       return 1;
//     }
//   }
// };

// window.boardToMatrix = function(board) {
//   var result = [];
//   for (var i = 0; i < board.get('n'); i++) {
//     result.push(board.get(i));
//   }
//   return result;
// };

window.findNRooksSolution = function(n) {

  var initBoard = new Board({n: n});
  //var solutionBoard;
  var solutionBoards = [];
  // recursive function
  var NRooksSolutionCount = 0;
  var searchForPlace = function(board, rooks) {
    // base case
    //debugger;
    //var placedRooks = rooks;

    for (var i = 0; i < n; i++) {
      // var rowMatrix = boardToMatrix(board);
      // //var workingBoard = new Board({n: n});
      // //workingBoard = board;
      // var rowBoard = new Board(rowMatrix);


      // var rowBoard = new Board(board.rows());
      // searchForPlace(rowBoard, rooks);
      //debugger;



 


      board.togglePiece(rooks, i);
      rooks++;
      //for (var j = 0; j < n; j++) {
        // var columnBoard = boardToMatrix(rowBoard);
        // //var workingBoard = new Board({n: n});
        // //workingBoard = board;
        // var workingBoard = new Board(columnBoard);

        // var workingBoard = board;
        // if (workingBoard.get(i)[j] === 1) {
        //   continue;
        // }
      if (board.hasAnyRooksConflicts()) {
        rooks--;
        board.togglePiece(rooks, i);
        continue;
      }

      //recursive case
      if (rooks < n) {
        // var matrix = boardToMatrix(workingBoard);
        // var temp = new Board(matrix);
        // var tempRound = round;
        // var tempPlacedRooks = placedRooks--;
        // temp.get(i)[j] = 0;
        // var newBoard = new Board(board.rows());
        // console.log('Before Recursion! :', board.rows());
        searchForPlace(board, rooks);
        // rooks--;

        // console.log('This is i we are looking for: ', i);
        // console.log('This is rooks we are looking for: ', rooks);
        // console.log('After Recursion! :', board.rows());
        rooks--;
        board.togglePiece(rooks, i);
        // var newRooks = rooks--;
        // newBoard.togglePiece(rooks, i);
        // searchForPlace(newBoard, rooks);
        // searchForPlace(temp, tempRound, tempPlacedRooks);

        // workingBoard.get(i)[j] = 0;
        // placedRooks--;
        // searchForPlace(temp, round, placedRooks);
      } 
      // if (round === 1) {
      //   searchForPlace(workingBoard, round - 1, placedRooks);
      // }
      if (rooks === n) {
        NRooksSolutionCount++;
        //solutionBoard = workingBoard;
        // console.log('BOARD ROWS :', board.rows());
        //var copy = board.rows().slice();
        var tempMatrix1 = board.rows();
        var tempBoard = new Board({n: n});
        var tempMatrix2 = tempBoard.rows();
        for (var m = 0; m < n; m++) {
          for (var l = 0; l < n; l++) {
            tempMatrix2[m][l] = tempMatrix1[m][l];
          }
        }
        console.log('Temp Matrix :', tempMatrix2);
        solutionBoards.push(tempMatrix2);
        rooks--;
        board.togglePiece(rooks, i);
        // var matrix = boardToMatrix(workingBoard);
        // var temp = new Board(matrix);
        // var tempRound = round;
        // var tempPlacedRooks = placedRooks--;

        // searchForPlace(temp, tempRound, tempPlacedRooks);

        //board = new Board({n: n});
        //return board;
      }//  else {
      //   board = new Board({n: n});
      // }
      //board.get(i)[j] = 0;
    }
  //}
  };
  searchForPlace(initBoard, 0);

  // var solution = [];
  // for (var i = 0; i < n; i++) {
  //   //debugger;
  //   solution.push(solutionBoard.get(i));
  // }

  //var solution = boardToMatrix(solutionBoard);
  var solution = solutionBoards[0];


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
  // return solutionCount / (this.factorial(n));
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
  // return solutionCount / this.factorial(n);
  return solutionCount;
};

















