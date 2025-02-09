# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(root, height):
            if(not root): return height

            maxHeightLeft = dfs(root.left, height + 1)
            maxHeightRight = dfs(root.right, height + 1)

            if maxHeightLeft == -1 or maxHeightRight == -1:
                return -1

            if abs(maxHeightLeft - maxHeightRight) > 1:
                return -1

            return max(maxHeightLeft, maxHeightRight)

        res = dfs(root, 1)
        
        return True if res != -1 else False
