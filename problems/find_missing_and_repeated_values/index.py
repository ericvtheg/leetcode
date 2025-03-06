class Solution:
    def findMissingAndRepeatedValues(self, grid: List[List[int]]) -> List[int]:
        n = len(grid)
        n *= n

        nums = set(range(1, n + 1))

        repeated = None

        for g in grid:
            for c in g:
                if not c in nums:
                    repeated = c
                else:
                    nums.remove(c)

        return [repeated, list(nums)[0]]
        
