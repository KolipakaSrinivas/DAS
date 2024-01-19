// insert 0(1)
// delete 0(1)
// lookup 0(1) // someTimes 0(n)
// search 0(1)

class MyObject {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push(key, value);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    // console.log(currentBucket);
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        console.log(i);
        if (currentBucket[i][0] == key) {
          console.log('kk');
          return currentBucket[i][1];
        }
      }
    }

    // return undefined;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const newObj = new MyObject(10);
newObj.set("key1", "value1");
newObj.set("key2", "value2");
newObj.set("key3", "value3");
newObj.set("key4", "value4");
newObj.set("key5", "value5");
console.log(newObj.get("key1"));
// console.log(newObj);
