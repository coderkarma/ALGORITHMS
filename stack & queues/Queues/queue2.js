// Queue data structure

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.frist = null;
		this.last = null;
		this.size = 0;
	}

	enqueue(value) {
		let newNode = new Node(value);

		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		return ++this.size;
	}

	dequeue() {
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

const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
