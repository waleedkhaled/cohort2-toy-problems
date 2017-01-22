/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
this.head;
this.length;
this.cont=this.head;
this.flag=false;
};

//write methods here!
 LinkedList.prototype.addToTail= function (data){

        
        var node = {
                data: data,
                next: null
            },

            
            temp;
        if (this.head === null){     
            this.head = node;
        } else {
            temp = this.head;

            while(temp.next){
                temp = temp.next;
            }

            temp.next = node;
        }

        
        this.length++;


};

  LinkedList.prototype.contains=function(target){
    while(this.cont!==target){
    	this.cont=this.cont.next;
    	if(this.cont===target){
    		this.flag=true;
    	}

    } 
   return this.flag;
}

    