class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        maxPow3 = 0

        while 3 ** maxPow3 < n:
            maxPow3 += 1

        cache = {}
        
        def dfs(n, pow):
            if (n == 0):
                return True
            if f'{n},{pow}' in cache:
                return False
            elif (n < 0 or pow < 0):
                return False
            
            for p in range(pow + 1):
                res = dfs(n - 3 ** p, p - 1)

                if res:
                    return True
                else:
                    cache[f'{n},{pow}'] = False

            return False
            


        return dfs(n, maxPow3)        
            

