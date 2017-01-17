/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
<<<<<<< HEAD

   var Stack = function() {
    this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
     this.stack.push(value);
=======
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
   };

   // remove an item from the top of the stack
   this.pop = function(){
<<<<<<< HEAD
    this.stack.pop();
  };

   // return the number of items in the stack
   this.size = function(){
    return this.stack.length;
  };
};
=======
   };

   // return the number of items in the stack
   this.size = function(){
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf

 /**
   * Queue Class
   */
<<<<<<< HEAD
   var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();
   var elementsSize=0;
   // called to add an item to the `queue`
   this.enqueue = function(value){
     inbox.stack.push(value)
     elementsSize++;

   }
   

   // called to remove an item from the `queue`
   this.dequeue = function(){
     inbox.stack.shift();
     elementsSize--;
   }
   

   // should return the number of items in the queue
   this.size = function(){
    return elementsSize;
  };
}
=======
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
     
     }
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
    }
   };

   // should return the number of items in the queue
   this.size = function(){
   };
 };
>>>>>>> f1996fc46a552df71db210c9733275ae9f4788cf
