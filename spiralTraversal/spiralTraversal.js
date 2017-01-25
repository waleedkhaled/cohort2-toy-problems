/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */


var spiralTraversal = function(matrix){
	var arr=[];
	var x=0;
	while(matrix!==[]){
for(var i=0;i<matrix.length;i++){
	arr.push(matrix[0][i])
	matrix.shift(matrix[i][0])
}
rotateMatrixRectangularwithDirection(matrix,-1);
 
}
};
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