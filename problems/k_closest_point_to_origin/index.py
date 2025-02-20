import heapq

class Solution:
    def distance(self, point1: List[int], point2: List[int]):
        return (point1[0] - point2[0])**2 + (point1[1] - point2[1])**2

        
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        size = 0
        for point in points:
            distance = self.distance(point, [0,0])
            heapq.heappush(heap, (-distance, point))
            size +=1
            if size > k:
                heapq.heappop(heap)
            
        ret = []
        for x in range(k):
            ret.append(heapq.heappop(heap)[1])

        return ret
