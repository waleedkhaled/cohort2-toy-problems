/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

var dirReduc = function(directions){
	var arr=[0,0];
	var route=[];
	for(var i=0;i<directions.length;i++){
		if(directions[i]==="NORTH"){
			arr[0]--;
		}
		else if(directions[i]==="SOUTH"){
			arr[0]++;
		}
		else if(directions[i]==="WEST"){
			arr[1]--;
		}
		else if(directions[i]==="EAST"){
			arr[1]++;
		}
	}
	if(arr[0]>0){
		for(var i=0;i<arr[0];i++){
			route.push("SOUTH");
		}
	}
	else if(arr[0]<0){
		for(var i=0;i>arr[0];i--){
			route.push("NORTH")
		}
	}
	if(arr[1]>0){
		for(var i=0;i<arr[1];i++){
			route.push("EAST");
		}
	}
	else if(arr[1]<0){
		for(var i=0;i>arr[1];i--){
			route.push("WEST")
		}
	}
	return route;
};

