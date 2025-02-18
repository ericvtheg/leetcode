class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        res = set(nums)

        return len(res) != len(nums)
        
