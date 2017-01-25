/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 *
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
<<<<<<< HEAD
  [ ['D',9,5,1],
   ['E','A',6,2],
   ['F','B',7,3],
   ['G','C',8,4]
  ]
=======
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
>>>>>>> 1337768aeb5d682fb6643a9f52b37165938d4930
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix =function (matrix) {
<<<<<<< HEAD
	var newMatrix=[];
	var temp=[];
	for(var i=0;i<matrix.length;i++){
		for (var x=0;x<matrix.length;x++){
			temp.push(matrix[x][i]);
		}
		temp=temp.reverse();
		newMatrix.push(temp);
		temp=[];
	}
	return newMatrix;
}

var rotateMatrixRectangular =function (matrix) {
	var newMatrix=[];
	var temp=[];
	for(var i=0;i<matrix.length;i++){
		for (var x=0;x<matrix[0].length;x++){
			temp.push(matrix[x][i]);
		}
		temp=temp.reverse();
		newMatrix.push(temp);
		temp=[];
	}
	return newMatrix;
}

var rotateMatrixRectangularwithDirection =function (matrix,clockwise) {
	var newMatrix=[];
	var temp=[];
	for(var i=0;i<matrix[0].length;i++){
		for (var x=0;x<matrix.length;x++){
			temp.push(matrix[x][i]);
		}
		temp=temp.reverse();
		if(clockwise>0){
		newMatrix.push(temp);
	}
	else{
		newMatrix.unshift(temp);
	}

		temp=[];
	}
	return newMatrix;
}

=======
	
}
>>>>>>> 1337768aeb5d682fb6643a9f52b37165938d4930
///////////////////