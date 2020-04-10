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
  }
  
  let myDoublyLinkedList = new DoublyLinkedList();
  console.log(myDoublyLinkedList.push(1));
  console.log(myDoublyLinkedList.push(2));
  console.log(myDoublyLinkedList.push(3));
  console.log(myDoublyLinkedList.pop());
  console.log(myDoublyLinkedList.pop());
  console.log(myDoublyLinkedList.pop());
  console.log(myDoublyLinkedList.shift());
  console.log(myDoublyLinkedList.unshift('karma'));
  