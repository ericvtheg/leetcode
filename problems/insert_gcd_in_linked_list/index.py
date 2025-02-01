# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def gcd(self, a, b):
        min_num = min(a,b)

        while min_num > 1:
            if a % min_num == 0 and b % min_num == 0:
                return min_num
            min_num -= 1
        
        return 1
    def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = head
        while head.next:
            gcd = self.gcd(head.val, head.next.val)

            new = ListNode(gcd, head.next)
            head.next = new
            head = head.next.next


        return dummy

        
