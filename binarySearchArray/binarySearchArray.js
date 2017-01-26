/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

var binarySearch = function (array, target) {
	mid=Math.floor(array.length/2);
if(target>=mid){
	for(var i=array[mid];i<array.length;i++){
		if(target===array[i]){
			return i;
		}
	}
}
else{
	for(var i=0;i<array[mid];i++){
		if(target===array[i]){
			return i;
		}
	}
}
};

