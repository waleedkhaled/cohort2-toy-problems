/**
 *  
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the 
 *  bottom right corner. The robot can move either up, down, left, or right, 
 *  but cannot visit the same spot twice. How many possible unique paths are 
 *  there to the bottom right corner? 
 *  
 *  Be systematic with your approach - make a clear plan before you start writing code.
 *
 *  Extra credit: Make your solution work for a grid of any size.
 *
 */

// A Board class will be useful. You can add extra methods to it.

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

//You can create a board size 5 like this:
//var myBoard = makeBoard(5);
//The answer for a board size 5 is 8512 unique paths
board.turnLeft=function(i,j){
this[i][j]=this[i-1][j];
togglePiece(i,j);
}
board.turnRight=function(i,j){
this[i][j]=this[i+1][j];
togglePiece(i,j);
}
board.goUp=function(i,j){
this[i][j]=this[i][j+1];
togglePiece(i,j);
}
board.goDown=function(i,j){
this[i][j]=this[i][j-1];
togglePiece(i,j);
}
var robotPaths = function(myBoard) {
 var random=0;
 var paths=0;
 var func=function(i,j){};
 if(random=1){
  func=turnLeft();
 }
 if(random=2){
  func=turnRight();
 }
 if(random=3){
  func=goUp();
 }
 if(random=4){
  func=goDown();
 }
 random=Math.round(Math.random()*4);
 for (var i = 0; i < myBoard.length; i++) {
   for(j=0;j<myBoard.length;j++){
    if(i!==5&&j!==5&&!hasBeenVisited(i,j)){
    func(i,j);
  }
  else{
    paths++;
    i=0;
    j=0;
  }

   }
 }

}

      










