# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def bstToGst(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        
        def dfs(root, sum):
            if not root: return sum

            sum = dfs(root.right, sum) + root.val
            root.val = sum
            
            sum = dfs(root.left, sum)
            

            return sum

        dfs(root, 0)

        return root
