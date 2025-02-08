class Trie:

    def __init__(self):
        self.trie = set()
        self.wordMap = set()
        

    def insert(self, word: str) -> None:
        self.wordMap.add(word)
        for idx in range(len(word)):
            self.trie.add(word[:idx+1])
        
    def search(self, word: str) -> bool:
        if word in self.wordMap:
            return True
        return False
   

    def startsWith(self, prefix: str) -> bool:
        if prefix in self.trie:
            return True
        return False
  
# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
