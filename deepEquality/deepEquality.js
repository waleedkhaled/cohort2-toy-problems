/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
   obj1=JSON.stringify(obj1);
   obj2=JSON.stringify(obj2);
 if(obj1!==obj2){
  return false;
 }
 else{
  return true;
 }
  }