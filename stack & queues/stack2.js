// using linkedList to build Stack

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(value) {
		let newNode = new Node(value);

		if (!this.frist) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let temp = this.first;
			this.first = newNode;
			this.first.next = temp;
		}
		return ++this.size;
	}

	pop() {
		if (!this.first) return null;

		let temp = this.first;
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}

const myStack = new Stack();
console.log(myStack.push('karma'));
console.log(myStack.push('drukpa'));
console.log(myStack.pop());
console.log(myStack);
