class ListNode {
  val: number

  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return null;

  let fastPtr = head;
  let slowPtr = head;
  let entryPtr = head;

  while (fastPtr && fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    if (fastPtr === slowPtr) {
      while (slowPtr !== entryPtr) {
        slowPtr = slowPtr.next;
        entryPtr = entryPtr.next;
      }
      return entryPtr;
    }
  }

  return null;
}
