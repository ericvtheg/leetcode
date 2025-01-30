import heapq

class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left = 0
        right = len(nums) - 1
        i = 0

        while i <= right:
            if nums[i] == 0:
                temp = nums[left]
                nums[left] = 0
                nums[i] = temp
                i += 1
                left += 1
            elif nums[i] == 2:
                temp = nums[right]
                nums[right] = 2
                nums[i] = temp
                right -= 1
            else:
                i += 1

        return nums

