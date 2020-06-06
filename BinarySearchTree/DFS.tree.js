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
				current.left = newNode;
			} else if (value > current.value) {
				current.right = newNode;
			} else {
				found = true;
			}
		}
		if (!found) return undefined;
		return current;
	}

	/// --------> BFS

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

	DFS() {
		let data = [];
		const traverse = (node) => {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		};
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

console.log(tree.DFS());
