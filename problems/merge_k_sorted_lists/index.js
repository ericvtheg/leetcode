/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  function mergeLists(l1, l2) {
    const dummy = new ListNode();
    let tail = dummy;

    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }

    if (l1) {
      tail.next = l1;
    } else if (l2) {
      tail.next = l2;
    }

    return dummy.next;
  }

  while (lists.length > 1) {
    let mergedLists = [];

    for (let i = 0; i < lists.length; i += 2) {
      const list1 = lists[i];
      const list2 = lists[i + 1];

      mergedLists.push(mergeLists(list1, list2));
    }
    lists = mergedLists;
  }

  return lists[0] ?? null;
};
