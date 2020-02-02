// build stack from scratch using linkedList data structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);

        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;

        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.length--;
        return holdingPointer;
    }
}

const myStack = new Stack();
myStack.push('epam');
myStack.push('google');
myStack.push('facebook');
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

console.log(myStack);
