// Fifo
// lookup 0(n)
// unqueue 0(1)
// dequeue 0(1)
// peek 0(1)

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class Queue {
  constructor() {
    (this.first = null), (this.last = null), (this.length = 0);
  }

  peek() {
    return this.first;
  }

  unqueue(value) {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.first = newNode;
      this.last = newNode;
      this.length++;
    }

    this.last.next = newNode;
    this.last = newNode;
    this.length++;
    return this;
  }
  dequeue() {
    if(!this.first) {
        return null
    }

    if(this.first == this.last) {
        this.last = null
        this.length--
        return this
        
    }

    this.first = this.first.next
    this.length--
    return this
  }
}

const queue = new Queue();
queue.unqueue(1);
queue.unqueue(2);
queue.unqueue(3);
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue);
