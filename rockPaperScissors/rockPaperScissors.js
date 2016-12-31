
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/
function rockPaperScissors(number){
  var array =[];
  var array2 =["rock","paper","scissors"]
  var bigArray=[];
  array.length=3;
  bigArray.length=number;
  for (var i = 0; i < bigArray.length; i++) {
    for (var j = 0; j < 4; j++) {
    var x=Math.floor(Math.random() * array2.length)
    array[j]=array2[x];
    }
    for (var m= 0; m < bigArray.length; m++) {
      if (bigArray[i] !==array ) {
      bigArray.push(array);        
      }
    }

  }
  return bigArray;
}