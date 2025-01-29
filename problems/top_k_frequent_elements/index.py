from heapq import heappush, heappushpop

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_table = {}
        for n in nums:
            freq_table[n] = freq_table.get(n, 0) + 1

        heap = []
        for i in freq_table.keys():
            heappush(heap, (-freq_table[i], i))


        ret = []
        
        for i in range(k):
            ret.append(heappop(heap)[1])

        return ret 
