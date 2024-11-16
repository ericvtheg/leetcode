function canConstruct(ransomNote: string, magazine: string): boolean {
  const map: Record<string, number> = {};
  let occurrences = ransomNote.length;

  for (let i = 0; i < ransomNote.length; i += 1) {
    map[ransomNote[i]] = (map[ransomNote[i]] ?? 0) + 1;
  }
  for (let i = 0; i < magazine.length; i += 1) {
    if (map[magazine[i]] && map[magazine[i]] > 0) {
      map[magazine[i]] -= 1;
      occurrences -= 1;
    }
    if (occurrences === 0) return true;
  }

  return false;
}

// space complexity
// O(k) where k is num letters

// time complexity
// O(n + m) -> O(n)
