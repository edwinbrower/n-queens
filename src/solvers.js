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


// should never have duplicates
// We need to call the recursive function twice so that it makes a second instance
// make sure toggle is correct
// then work on time complexity


//////////////////////////////////////////////////////////////////////////////
window.NRooksSolutionCount = 0;
window.NQueensSolutionCount = 0;

window.findNRooksSolution = function(n) {

  var initBoard = new Board({n: n});
  var solutionBoards = [];
  var NRooksSolutionCount = 0;
  var searchForPlace = function(board, rooks) {
    for (var i = 0; i < n; i++) {
      // if (!board.hasAnyRooksConflicts()) {
      //   board.togglePiece(rooks, i);
      //   rooks++;
      // } 
      // else {
      //   rooks--;
      //   board.togglePiece(rooks, i);
      //   continue;
      // }


      board.togglePiece(rooks, i);
      rooks++;
      if (board.hasAnyRooksConflicts()) {
        rooks--;
        board.togglePiece(rooks, i);
        continue;
      }

      //recursive case
      if (rooks < n) {
        searchForPlace(board, rooks);
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
        var tempMatrix1 = board.rows();
        var tempBoard = new Board({n: n});
        var tempMatrix2 = tempBoard.rows();
        for (var m = 0; m < n; m++) {
          for (var l = 0; l < n; l++) {
            tempMatrix2[m][l] = tempMatrix1[m][l];
          }
        }
        //console.log('Temp Matrix :', tempMatrix2);
        solutionBoards.push(tempMatrix2);
        rooks--;
        board.togglePiece(rooks, i);
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
  var searchForPlace = function(board, rooks) {
    for (var i = 0; i < n; i++) {
      // if (!board.hasAnyRooksConflicts()) {
      //   board.togglePiece(rooks, i);
      //   rooks++;
      // } 
      // else {
      //   rooks--;
      //   board.togglePiece(rooks, i);
      //   continue;
      // }


      board.togglePiece(rooks, i);
      rooks++;
      if (board.hasAnyQueensConflicts()) {
        rooks--;
        board.togglePiece(rooks, i);
        continue;
      }

      //recursive case
      if (rooks < n) {
        searchForPlace(board, rooks);
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
        NQueensSolutionCount++;
        var tempMatrix1 = board.rows();
        var tempBoard = new Board({n: n});
        var tempMatrix2 = tempBoard.rows();
        for (var m = 0; m < n; m++) {
          for (var l = 0; l < n; l++) {
            tempMatrix2[m][l] = tempMatrix1[m][l];
          }
        }
        //console.log('Temp Matrix :', tempMatrix2);
        solutionBoards.push(tempMatrix2);
        rooks--;
        board.togglePiece(rooks, i);
      }
    }
  };

  searchForPlace(initBoard, 0);
  console.log(solutionBoards);
  var solution = solutionBoards[0];
  window.NQueensSolutionCount = NQueensSolutionCount;
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  window.findNQueensSolution(n);
  var solutionCount = window.NQueensSolutionCount; //fixme
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

















