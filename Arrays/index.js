// lookups 0(1)
// push 0(1)
// inserts 0(n)
// delete 0(n)

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//   }

//   pop() {
//     const popItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return popItem;
//   }

//   delete(index) {
//     const deletedItem = this.data[index];
//     return this._shefting(index, deletedItem);
//   }

//   _shefting(index, deletedItem) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--
//     return deletedItem;
//   }
// }

// const newArray = new MyArray();
// newArray.push("item1");
// newArray.push("item2");
// newArray.push("item3");
// console.log(newArray.length);
// console.log(newArray.delete(0));
// console.log(newArray.length);
// console.log(newArray);


// const reverse = (str) => {
//   return str.split('').reverse()
// } 

// const reverse1 = (str) => {
//   for(let i = str.length; i <= 0; i--) {
//     console.log(i);
//   }
// }


// console.log(reverse1('srinivas'));

