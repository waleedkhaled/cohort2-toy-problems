/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/

function ticTacToe(board){
	arr1=[];
	arr2=[];
	arr3=[];
	arr4=[];
	arr5=[];
	arr6=[];
	arr7=[];
	arr8=[board[0][2],board[1][1],board[2][0]];

	for(var i=0;i<3;i++){
		arr1.push(board[0][i])
		arr2.push(board[1][i])
		arr3.push(board[2][i])
		arr4.push(board[i][0])
		arr5.push(board[i][1])
		arr6.push(board[i][2])
		arr7.push(board[i][i])

	}
	if(arr1.join("").split(1).length-1===3||arr2.join("").split(1).length-1===3||arr3.join("").split(1).length-1===3||arr4.join("").split(1).length-1===3||arr5.join("").split(1).length-1===3||arr6.join("").split(1).length-1===3||arr7.join("").split(1).length-1===3||arr8.join("").split(1).length-1===3){
		return 1;
	}
	else if(arr1.join("").split(2).length-1===3||arr2.join("").split(2).length-1===3||arr3.join("").split(2).length-1===3||arr4.join("").split(2).length-1===3||arr5.join("").split(2).length-1===3||arr6.join("").split(2).length-1===3||arr7.join("").split(2).length-1===3||arr8.join("").split(2).length-1===3){
		return 2;
	}
	else{
		for(var x=0;x<3;x++){
			for(var j=0;j<3;j++){
				if(board[x][j]===0){
					return -1;
				}
			}
		}
		return 0;
	}
};
