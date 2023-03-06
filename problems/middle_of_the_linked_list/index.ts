class ListNode {
  val: number

  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// first implementation using two while loops
function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let headPtr = head;

  let totalNodes = 0;
  while (head) {
    totalNodes += 1;

    head = head.next;
  }

  const midNode = Math.floor(totalNodes / 2);
  let curNode = 0;
  while (curNode < midNode) {
    curNode += 1;

    headPtr = headPtr.next;
  }

  return headPtr;
}

// using two pointers - one slow & one fast
function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let slowPtr = head;
  let fastPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;
  }

  return slowPtr;
}
