/*
Problem 1:
The makeLooper() function takes a string (of non-zero length) as an argument. 
It returns a function. The function it returns will return successive characters
of the string on successive invocations. It will start back at the beginning of the string
once it reaches the end.

For example:
var abc = makeLooper('abc');
abc(); // should return 'a' on this first call
abc(); // should return 'b' on this second call
abc(); // should return 'c' on this third call
abc(); // should return 'a' again on this fourth call
*/

var counter=0;
function makeLooper(string){
	return function(){
if(counter===string.length+1){
	counter=0;
}
return counter++;
}
};


/*
Problem 2:
We have too many cans of coca-cola, fanta, and sprite in the kitchen. 
Let's build a pyramid out of them!

A pyramid will square the number of cans in each level:
1 can in the top level, 
4 in the second, 
9 in the next, 
16, 
25,
36
49
64
81
100
121
144
169
196

...

Complete the pyramid function to return the number of complete levels of a can pyramid you can make,
given the number of cans

For example:

pyramid(750); // should === 12
pyramid(1666); // should === 16
*/


function pyramid(cans){
	var arr=[];
	var i=1;
	while(cans-(i*i)>=0){
		
		if(cans-(i*i)>=0){
			arr.push(i*i);
		cans=cans-(i*i);
	}
		i++;
	}
	return arr.length;
};


