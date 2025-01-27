class Solution:
    maxProfit = 0

    def jobScheduling(
        self, startTime: List[int], endTime: List[int], profit: List[int]
    ) -> int:
        jobs = zip(startTime, endTime, profit)

        jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[0])

        # 1 2 3
        # 1 2 3 4
        def binarySearch(i, target):
            left = i
            right = len(jobs)

            while left < right:
                mid = (left + right) // 2

                if jobs[mid][0] >= target:
                    right = mid
                else:
                    left = mid + 1

            return left

        cache = {}

        def dfs(i):
            if i in cache:
                return cache[i]
            elif i == len(jobs):
                return 0

            res = dfs(i + 1)

            j = binarySearch(i + 1, jobs[i][1])

            cache[i] = res = max(jobs[i][2] + dfs(j), res)

            return res

        return dfs(0)
