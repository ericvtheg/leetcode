class Solution:
    def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
        numGroups = 0

        left = 0

        i = 0
        prev = None
        while i < len(colors) + k - 1:
            cur = colors[i % len(colors)]

            if prev is not None and cur == prev:
                left = i
            
            prev = cur
            
            i += 1
            if i - left == k:
                numGroups += 1
                left += 1
        
        return numGroups
