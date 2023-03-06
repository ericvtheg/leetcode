class ListNode {
    val: number

    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let newHead: ListNode | null = null;
  while (head) {
    const tempNode = new ListNode(head.val);
    tempNode.next = newHead;
    newHead = tempNode;

    head = head.next;
  }

  return newHead;
}

// iterative - in place
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  let prev = null;

  while (head) {
    const temp = head.next;
    head.next = prev;
    prev = head;

    head = temp;
  }

  return prev;
}

// recursive in place
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;

  const node = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return node;
}
