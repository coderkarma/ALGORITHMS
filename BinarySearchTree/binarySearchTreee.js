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
					current = current.right;
				}
			}
		}
	}

	// find the node
	find(value) {
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

	BFS() {
		let node = this.root;
		let queue = [];
		let data = [];

		queue.push(node);

		// check to see if there is something in queue
		while (queue.length) {
			node = queue.shift();

			data.push(node.value);
			// check to see if the node has left or right:
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	/// -----> Depth first Search   -- Pre0rder -- recursively

	DFSPreOrder() {
		let data = [];
		const traverse = (node) => {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
		traverse(this.root);
		return data;
	}

	// DFS ---- Post order:    [ 3, 8, 6, 20, 15, 10 ]

	// in this post order root is the last thing we visit after checking left branch and the right branch

	DFSPostOrder() {
		let data = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
			data.push(node.value);
		};
		traverse(this.root);
		return data;
	}

	// DFS IN ORDER   [ ]

	DFSInOrder() {
		//  [3, 8, 6, 15, 10, 20]
		let data = [];

		const traverse = (node) => {
			if (node.left) traverse(node.left);
			data.push(node.value);
			if (node.right) traverse(node.right);
		};

		// const traverse = (node) => {
		// 	node.left && traverse(node.left);
		// 	data.push(node.value);
		// 	node.right && traverse(node.right);
		// };
		traverse(this.root);
		return data;
	}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree);

//       10
//    5     13
//  2  6    7  16
