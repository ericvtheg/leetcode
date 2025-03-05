class Solution:
    def coloredCells(self, n: int) -> int:
        sum = max = (n * 2) - 1

        while max > 1:
            max -= 2
            sum += (max * 2)
        
        return sum
