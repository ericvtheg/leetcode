interface IMinStackNode {
  val: number;
  min: number;
}

class MinStack {
  constructor() {}

  private stack = [];
  private currentMin: number = Infinity;

  push(val: number): void {
    if (this.currentMin > val) {
      this.currentMin = val;
    }
    this.stack.push({ val, min: this.currentMin });
  }

  pop(): void {
    this.stack.pop();
    if (this.stack.length) {
      this.currentMin = this.getMin();
    } else {
      this.currentMin = Infinity;
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
