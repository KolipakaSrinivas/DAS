// prepend 0(1)
// appeand 0(1)
// insert 0(n)
// delete 0(n)

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };

    this.tail = this.head;
    this.length = 1;
  }

  appeand(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepond(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    if (index > this.length) {
      return this.appeand(value);
    }

    const newNode = new Node(value)

    let leaderNode = this._travsalIndex(index - 1);
    let pointerHolder = leaderNode.next

  }

  _travsalIndex(index) {
    let currunter = 0;
    let currentNode = this.head;
    while (currunter !== index) {
      currentNode = currentNode.next;
      currunter++;
    }
    return currentNode;
  }
}

const MylinkedList = new LinkedList(0);
MylinkedList.appeand(1);
MylinkedList.prepond(2);
console.log(MylinkedList.printList());
MylinkedList.insert(2222, 100);
console.log(MylinkedList);
