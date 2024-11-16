# 383. Ransom Note

Difficulty: 🟡Medium🟡 \
Completed: [✅] \
Link: https://leetcode.com/problems/ransom-note \ 

## Notes

Keep an eye for memory usage where we're only storing letters of the alphabet. Makes for an easy optimization of just having an array of length 26 (for the alphabet). Using an object works and is more flexible but less optimized for the specific case. Worth mentioning.

Also if we are allocating memory per unique letter, then our space complexity is just O(k) where is the length of the alphabet. Which is O(1) NOT O(n).
