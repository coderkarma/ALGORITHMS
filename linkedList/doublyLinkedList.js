class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
      this.length++;
      return newNode;
    }
  
    pop() {
      if (!this.head) return undefined;
      let poppedNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = poppedNode.prev;
        this.tail.next = null;
        poppedNode.prev = null;
      }
      this.length--;
      return poppedNode;
    }
  
    shift() {
      if (!this.head) return undefined;
      let oldHead = this.head;
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = oldHead.next;
        this.head.prev = null;
        oldHead.next = null;
      }
      this.length--;
      return oldHead;
    }
  
    unshift(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      }
      this.length++;
      return newNode;
    }
  
    get(index) {
      if (index < 0 || index >= this.length) return null;
      let counter, current;
      if (index <= this.length / 2) {
        current = this.head;
        counter = 0;
  
        while (counter !== index) {
          current = current.next;
          counter++;
        }
      } else {
        counter = this.length - 1;
        current = this.tail;
  
        while (counter !== index) {
          current = current.prev;
          counter--;
        }
      }
      return current;
    }
  
    set(index, value) {
      let foundNode = this.get(index);
  
      if (foundNode !== null) {
        foundNode.value = value;
        return true;
      }
      return false;
    }
  
    insert(index, value) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(value);
      if (index === this.length) return !!this.push(value);
  
      let newNode = new Node(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;
  
      (beforeNode.next = newNode), (newNode.prev = beforeNode);
      (newNode.next = afterNode), (afterNode.prev = newNode);
  
      this.length++;
      return true;
    }
  
    remove(index) {
      if (index < 0 || index >= this.length) return undefined;
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
  
      let removedNode = this.get(index);
      let beforeNode = removedNode.prev;
      let afterNode = removedNode.next;
      beforeNode.next = afterNode;
      afterNode.next = beforeNode;
  
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }
  
  let myDoublyLinkedList = new DoublyLinkedList();
  console.log(myDoublyLinkedList.push(1));
  console.log(myDoublyLinkedList.push(2));
  console.log(myDoublyLinkedList.push(2));
  // console.log(myDoublyLinkedList.pop());
  // console.log(myDoublyLinkedList.pop());
  // console.log(myDoublyLinkedList.pop());
  // console.log(myDoublyLinkedList.shift());
  // console.log(myDoublyLinkedList.unshift('karma'));
  console.log('get method', myDoublyLinkedList.get(4));
  console.log('set method', myDoublyLinkedList.set(0, 'KARMA'));
  console.log('Insert method', myDoublyLinkedList.insert(0, 'INSERTED'));
  console.log('Insert secmethod', myDoublyLinkedList.insert(3, 'second insert'));
  console.log('remove method', myDoublyLinkedList.remove(0));
  console.log('remove method', myDoublyLinkedList.remove(0));
  console.log('remove method', myDoublyLinkedList.remove(0));
  console.log('remove method', myDoublyLinkedList.remove(0));
  //console.log('remove method', myDoublyLinkedList.remove(0));
  console.log('karma', myDoublyLinkedList);
  