
# 133. Clone Graph

Difficulty: 🟡Medium🟡 \
Completed: [✅] \
Link: https://leetcode.com/problems/clone-graph \

## Notes

When using recursion, keep in mind max depth. In a graph with max 100 nodes, stack overflow is not a risk. If stack overflow is a risk (when max depth can reach about 10,000) it would be best to use bfs instead of dfs. In the case of this problem given the constraints both DFS and BFS are equally valid.
