class RandomizedSet {
  map = {};
  list = [];

  insert(val: number): boolean {
    if (this.map[val] !== undefined) {
      return false;
    }

    this.list.push(val);
    this.map[val] = this.list.length - 1;

    return true;
  }

  remove(val: number): boolean {
    if (this.map[val] === undefined) {
      return false;
    }

    if (this.list.length === 1) {
      const lastVal = this.list.pop();
      delete this.map[lastVal];
      return true;
    }
    if (this.map[val] === this.list.length - 1) {
      this.list.pop();
      delete this.map[val];
      return true;
    }

    const lastVal = this.list.pop();
    const idxOfNumToDelete = this.map[val];
    this.list[idxOfNumToDelete] = lastVal;
    this.map[lastVal] = idxOfNumToDelete;

    delete this.map[val];
    return true;
  }

  getRandom(): number {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
