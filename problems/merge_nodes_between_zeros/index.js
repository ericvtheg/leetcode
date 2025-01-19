/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let sum = 0;
  let dummy = new ListNode();
  let tail = dummy;
  let seenZero = false;

  while (head) {
    if (head.val === 0) {
      if (seenZero) {
        tail.next = new ListNode(sum);
        tail = tail.next;
        sum = 0;
      } else {
        seenZero = true;
      }
    } else {
      sum += head.val;
    }
    head = head.next;
  }

  return dummy.next;
};
