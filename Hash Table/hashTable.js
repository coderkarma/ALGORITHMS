class HashTable {
    constructor(size = 53) {
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
  
    // set
    set(key, value) {
      let index = this._hash(key);
      if (!this.keyMap[index]) {
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
  
    // Get
    get(key) {
      let index = this._hash(key);
      if (this.keyMap[index]) {
        for (let i = 0; i < this.keyMap[index].length; i++) {
          if (this.keyMap[index][i][0] === key) {
            // return the value
            return this.keyMap[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    values() {
      let valuesArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!valuesArr.includes(this.keyMap[i][j][1])) {
              valuesArr.push(this.keyMap[i][j][1]);
            }
          }
        }
      }
      return valuesArr;
    }
  
    // key
    keys() {
      let keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
              keysArr.push(this.keyMap[i][j][0]);
            }
          }
        }
      }
      return keysArr;
    }
  }
  
  let ht = new HashTable();
  ht.set('hlo world', 'GoodBye');
  ht.set('helo', 'oodBye');
  ht.set('he ', 'dBye');
  ht.set('ho', 'oodBye');
  ht.set('ho', 'oodBye');
  ht.set('ho', 'oodBye');
  console.log(ht);
  
  ht.keys().forEach(key => {
    console.log(ht.get(key));
  });
  
  // Big O of Hash Table  // constant time
  // insertion 0(1)
  // deletion  0(1)
  // Access   0(1)
  
  // worst hash function  0(n) - linear Time
  