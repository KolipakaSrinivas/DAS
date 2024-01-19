// Lifo method
// lookup 0(n)
// push 0(1)
// pop 0(1)
// peek 0(1)

// class Node {
//   constructor(value) {
//     (this.value = value), (this.next = null);
//   }
// }

// class Stack {
//   constructor() {
//     (this.top = null), (this.bottom = null), (this.length = 0);
//   }

//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);

//     if (this.length == 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//       this.length++;
//       return this;
//     }

//     const holdingPointer = this.top;
//     this.top = newNode;
//     this.top.next = holdingPointer;
//     this.length++;
//   }
//   pop() {
//     if (!this.top) {
//       return undefined;
//     }

//     if(this.top == this.bottom ) {
//       this.bottom = null
//     }
//     let holdingPointer = this.top.next;
//     this.top = holdingPointer;
//     this.length--;
//   }
//   loolup() {}
// }

// const newNode = new Stack();
// newNode.push(1);
// newNode.push(2);
// newNode.push(3);
// newNode.pop();
// newNode.pop();
// newNode.pop();
// newNode.pop();
// console.log(newNode);

class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop(this.array.length-1)
    return this
  }

  peek() {
    return this.array[this.array.length-1]
  }


}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.pop()
stack.push(10)
console.log(stack.peek());
console.log(stack);
