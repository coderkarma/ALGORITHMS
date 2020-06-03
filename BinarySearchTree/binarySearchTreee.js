class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let newNode = new Node(value);
		if (this.root === null) {
			this.root = newNode;
			return this;
		}
		// declare the current node
		let current = this.root;

		while (true) {
			// check to see if there is any duplicates then just return undefined or false
			if (value === current.value) return undefined;
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode;
					return this;
				} else {
					// if there leftnode is already update the node
					current = current.left;
				}
			} else if (value > current.value) {
				// check to see if there is right node, if there isn't then we found the spot
				if (current.right === null) {
					current.right = newNode;
					return this;
				} else {
					// if there is right node already then update the node
					current.right = newNode;
				}
			}
		}
	}

	// find the node
	fidn(value) {
		if (this.root === null) return false;

		let current = this.root;
		let found = false;

		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(3);



tree.insert(14);
tree.insert(1);
tree.insert(1);

console.log(tree);

//       10
//    5     13
//  2  6    7  16
