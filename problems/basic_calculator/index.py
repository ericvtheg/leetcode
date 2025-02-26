class Solution:
    def calculate(self, s: str) -> int:
        

        stack = []
        res = 0
        isAddition = True

        i = 0

        while i < len(s):
            c = s[i]
            if c == ' ':
                i += 1
                continue
            elif c == '-':
                isAddition = False
            elif c == '+':
                isAddition = True
            elif c == ')':
                prevRes, prevIsAddition = stack.pop()
                if prevIsAddition:
                    res += prevRes
                else:
                    res = prevRes - res
            elif c == '(':
                stack.append([res, isAddition])
                isAddition = True
                res = 0
            else:
                i += 1
                while i < len(s) and s[i].isnumeric():
                    c += s[i]
                    i += 1
                if isAddition:
                    res += int(c)
                elif not isAddition:
                    res -= int(c)
                i -=1

            i += 1




        
        return res  
