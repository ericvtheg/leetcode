interface ITimeMapNode {
  val: string;
  timestamp: number;
}

class TimeMap {
  constructor() {}

  private readonly map: Record<string, ITimeMapNode[]> = {};

  private binarySearch(nodes: ITimeMapNode[], timestamp: number): string {
    let left = 0;
    let right = nodes.length - 1;

    let closest = '';

    while (left <= right) {
      const midIdx = Math.floor((right - left) / 2) + left;
      const midNode = nodes[midIdx];

      if (midNode.timestamp === timestamp) {
        return midNode.val;
      } else if (midNode.timestamp > timestamp) {
        right = midIdx - 1;
      } else {
        closest = midNode.val;
        left = midIdx + 1;
      }
    }
    return closest;
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.map[key]) {
      this.map[key].push({ val: value, timestamp });
    } else {
      this.map[key] = [{ val: value, timestamp }];
    }
  }

  get(key: string, timestamp: number): string {
    const nodes = this.map[key] ?? [];
    const result = this.binarySearch(nodes, timestamp);
    return result;
  }
}
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
