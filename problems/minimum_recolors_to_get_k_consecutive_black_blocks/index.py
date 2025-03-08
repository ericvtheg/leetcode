class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        whiteBlocks = 0
        minChange = float('inf')


        i = 0
        j = 0

        if blocks[i] == 'W':
            whiteBlocks += 1

        while j < len(blocks):
            if j - i + 1 == k:
                minChange = min(minChange, whiteBlocks)

                if blocks[i] == 'W':
                    whiteBlocks -= 1
                i += 1
                j += 1
                if j < len(blocks) and blocks[j] == 'W':
                    whiteBlocks += 1
            else:
                j += 1
                if blocks[j] == 'W':
                    whiteBlocks += 1

                
        return minChange      
            
            
