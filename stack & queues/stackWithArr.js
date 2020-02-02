// build stack with an array
class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1];
    }

    push(value) {
        this.array.push(value);
        return this;
    }

    pop() {
        return this.array.pop()
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
