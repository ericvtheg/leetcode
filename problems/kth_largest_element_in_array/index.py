from heapq import heappush, heappop, heappushpop

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        heap = []
        
        nums_inserted = 0
        for n in nums:
            if(nums_inserted == k):
                heappushpop(heap, n)
                continue
            heappush(heap, n)
            nums_inserted += 1

        return heappop(heap)

