class ListNode {
     val: number

     next: ListNode | null

     constructor(val?: number, next?: ListNode | null) {
       this.val = (val === undefined ? 0 : val);
       this.next = (next === undefined ? null : next);
     }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  let head;
  let listNode;
  if (list1.val >= list2.val) {
    listNode = new ListNode(list2.val);
    list2 = list2.next;
  } else {
    listNode = new ListNode(list1.val);
    list1 = list1.next;
  }

  head = listNode;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      listNode.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      listNode.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    listNode = listNode.next;
  }

  if (!list1) {
    listNode.next = list2;
  }
  if (!list2) {
    listNode.next = list1;
  }

  return head;
}
