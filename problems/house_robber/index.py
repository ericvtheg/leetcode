class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]

        arr = [-1] * len(nums)
        arr[0] = nums[0]
        arr[1] = nums[1]

        for i in range(2, len(nums)):
            num = nums[i]
            prev_prev = arr[i - 2]
            prev_prev_prev = arr[i - 3] if i - 3 >= 0 else -1

            arr[i] = max(arr[i], num + max(prev_prev, prev_prev_prev))

        return max(arr[-1], arr[-2])
