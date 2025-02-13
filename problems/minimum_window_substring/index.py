from collections import defaultdict, deque

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        minSubStr = ""
        charIdx = deque() # fifo

        chars = defaultdict(int)
        charCount = 0

        for char in t:
            chars[char] += 1
            charCount += 1

        left = None
        for right, char in enumerate(s):
            if char in chars:
                charIdx.append(right)
                chars[char] -= 1
                if chars[char] >= 0:
                    charCount -= 1
                if left is None:
                    left = right
            
            while left is not None and chars[s[left]] < 0 and s[charIdx[0]] == s[left]:
                toRidOfCharIdx = charIdx.popleft()
                toRidOfChar = s[toRidOfCharIdx]
                chars[toRidOfChar] += 1
                if chars[toRidOfChar] > 0:
                    charCount += 1
                left = charIdx[0]
                
            if charCount == 0:
                subStr = s[left:right+1]
                if minSubStr == "":
                    minSubStr = subStr
                elif len(minSubStr) > len(subStr):
                    minSubStr = subStr


        
        return minSubStr

