// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let a = this.head;
    while(a) {
      count++;
      a = a.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let a = this.head;
    let last = this.head;
    while(a) {
      last = a;
      a = a.next;
    }
    return last;
  }

  clear() {
    let a = this.head;
    let b = this.head;
    while(a) {
      b = a;
      a = a.next;
      b = null;
    }
    this.head = null;
  }

  removeFirst() {
    if(!this.head) { return }
    this.head = this.head.next;
  }

  removeLast() {
    let a = this.head;
    let b = this.head;
    while(a && a.next) {
      b = a;
      a = a.next;
    }
    if(!a) { return }
    if(a === b) { this.head = a.next }
    b.next = null;
  }

  insertLast(data) {
    let a = this.head;
    while(a && a.next) {
      a = a.next;
    }

    if(a) {
      a.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let a = this.head;
    for(let count = 0; a && count < index; count++) {
      a = a.next;
    }
    return a;
  }

  removeAt(n) {
    let a = this.head;
    let b = this.head;
    for(let i = 0; a && i < n; i++) {
      b = a;
      a = a.next;
    }
    if(!a) { return }
    if(a === b) { this.head = a.next }
    b.next = a.next;
  }

  insertAt(data, n) {
    let a = this.head;
    let b = this.head;
    for(let i = 0; a && i < n; i++) {
      b = a;
      a = a.next;
    }

    if(b == this.head) {
      this.head = new Node(data, a);
    } else {
      b.next = new Node(data, a);
    }
  }

  forEach(fn) {
    let n = this.head;
    while(n != null) {
      fn(n);
      n = n.next;
    }
  }

  *[Symbol.iterator]() {
    let n = this.head;
    while(n != null) {
      yield n;
      n = n.next;
    }
  }
}


module.exports = { Node, LinkedList };
