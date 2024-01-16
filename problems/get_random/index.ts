class RandomizedSet {
  private readonly randomSet: Set<number>;

  constructor() {
    this.randomSet = new Set();
  }

  insert(val: number): boolean {
    if (this.randomSet.has(val)) {
      return false;
    }
    this.randomSet.add(val);
    return true;
  }

  remove(val: number): boolean {
    return this.randomSet.delete(val);
  }

  getRandom(): number {
    const arr = Array.from(this.randomSet);
    const randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
