class Solution:
    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:

        def dfs(row, col, val):
            if row >= len(matrix) or col >= len(matrix[0]):
                return True
            if not matrix[row][col] == val:
                return False
            return dfs(row + 1, col + 1, val)

        for idx in range(len(matrix)):
            if not dfs(idx, 0, matrix[idx][0]):
                return False

        for idx in range(1, len(matrix[0])):
            if not dfs(0, idx, matrix[0][idx]):
                return False
        
        return True
