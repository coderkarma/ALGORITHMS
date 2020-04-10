class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class SinglyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      // if head is empty
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
        this.length++;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
      }
    }
  
    // remove the last node
    pop() {
      if (!this.head) return undefined;
      let current = this.head;
      let newTail = current;
  
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  
    // shift // remove the first element
    shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return currentHead;
    }
  
    // unshift add the element in the begining
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return this;
    }
  
    // Get the specific index 🍜🍜🍜🍜🍜
    get(index) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
  
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  
    // Set the value of specific node 🎂
    set(index, value) {
      let foundNode = this.get(index);
  
      if (foundNode) {
        foundNode.value = value;
        return true;
      }
      return false;
    }
  
    // Add the value in specific index 🎁🎁🎁🎁🎁
    insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === this.length) {
        this.push(value);
        return true;
      }
      if (index === 0) {
        this.unshift(value);
        return true;
      }
      const newNode = new Node(value);
      let previous = this.get(index - 1);
      let temp = previous.next;
      previous.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
    }
  
    // Remove ✔✔✔✔✔
    remove(index) {
      if (index < 0 || index > this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
  
      let previousNode = this.get(index - 1);
      let removed = previousNode.next;
      previousNode.next = removed.next;
      this.length--;
      return removed;
    }
  
    print() {
      let arr = [];
      let current = this.head;
      while (current) {
        arr.push(current.value);
        current = current.next;
      }
      console.log(arr);
    }
    
    // Reverse LinkedList 🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍
    reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let previous = null;
      let next;
  
      for (let i = 0; i < this.length; i++) {
        next = node.next;
        node.next = previous;
        previous = node;
        node = next;
      }
      return this;
    }
  }
  // 0--> 1 --> 2 -->4
  const linkedList = new SinglyLinkedList();
  console.log(linkedList.push(1));
  console.log(linkedList.push(2));
  console.log(linkedList.push(3));
  // console.log(linkedList.pop());
  
  console.log('newone', linkedList.pop());
  console.log('final result', linkedList);
  console.log('shift method', linkedList.shift());
  console.log(linkedList.shift());
  console.log(linkedList.push('sf'));
  console.log(linkedList.shift());
  console.log(linkedList.shift());
  console.log(linkedList);
  
  console.log(linkedList.get(1));
  console.log(linkedList.set(1, 2));
  console.log(linkedList.get(2));
  console.log(linkedList.insert(3, 30));
  console.log(linkedList.remove(3));
  
  console.log(linkedList.reverse());
  console.log(linkedList.print());
  