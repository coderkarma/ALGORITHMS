class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		let index = this.values.length - 1;
		const element = this.values[index];

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.values[parentIndex];

			if (element <= parent) break;
			this.values[parentIndex] = element;
			this.values[index] = parent;
			index = parentIndex;
		}
	}

	extractMax() {
		// edge case come back
		const max = this.values[0];
		let end = this.values.pop();
		this.values[0] = end;
		// trickle down
		this.sinkDown();
		return max;
	}

	sinkDown() {
		let idx = 0;
		// find the children
		const length = this.values.length;
		const element = this.values[0];

		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild, rightChild;
			let swap = null;

			if (leftChild < length) {
				leftChild = this.values[leftChildIdsx];
				if (leftChild > element) {
					swap = leftChildIdx;
				}
			}
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(200);
heap.extractMax();

console.log(heap);
