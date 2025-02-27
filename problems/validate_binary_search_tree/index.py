# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:

        def dfs(root, numMin, numMax):
            if not root:
                return True
            if root.val <= numMin or root.val >= numMax:
                return False
            
            resLeft = dfs(root.left, numMin, root.val)
            if not resLeft:
                return False
            
            return dfs(root.right, root.val, numMax)

        return dfs(root, float('-inf'), float('inf'))
