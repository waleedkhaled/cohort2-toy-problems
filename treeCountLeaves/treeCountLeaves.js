/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = {};
};




Tree.prototype.countLeaves = function () {
	var counter=0;
	var child=this.children;
	if(child===[]){
		counter++;
	}
	while(this.children){
		child=child.children;
		if(child===[]){
			counter++;
		}
	}
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
	this.children.push(child);
  
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  while(this.children){
  	var child1=this.children;
  	child1=child1.children;
  	if(child1===child){
  		return true;
  	}
  }
  return false;
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  while(this.children){
  	var child1=this.children;
  	child1=child1.children;
  	if(child1===child){
  		child1={};
  	}
  }
};