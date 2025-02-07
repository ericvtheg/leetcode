class Solution:
    def calcBox(self, row, col): 
        return ((row // 3) * 3) + col // 3

    def isValidSudoku(self, board: List[List[str]]) -> bool:
        boxes = {}
        cols = {}
        rows = {}

        for row in range(len(board)):
            for col in range(len(board[row])):
                cur = board[row][col]

                if cur == '.':
                    continue

                if (cur in cols.get(col, set())):
                    return False
                if not col in cols:
                    cols[col] = set()
                cols[col].add(cur)

                
                if (cur in rows.get(row, set())):
                    return False
                if not row in rows:
                    rows[row] = set()
                rows[row].add(cur)

                boxId = self.calcBox(row, col)
                if (cur in boxes.get(boxId, set())):
                    return False
                if not boxId in boxes:
                    boxes[boxId] = set()
                boxes[boxId].add(cur)

        return True
