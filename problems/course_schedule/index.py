class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        prereqMap = {}

        for [parent, child] in prerequisites:
            if not parent in prereqMap:
                prereqMap[parent] = []
            
            prereqMap[parent].append(child)

        stack = [key for key in prereqMap.keys()]
        path = set()
        visited = {}

        while stack:
            node = stack[-1]
            path.add(node)

            if node in visited and visited[node] == True:
                path.remove(stack.pop())
                continue
            
            visited[node] = True

            prereqs = prereqMap.get(node, [])
            for req in prereqs:
                if req in path:
                    return False
            stack.extend(prereqs)
            

        return True   
