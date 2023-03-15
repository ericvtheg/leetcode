# 142. Linked List Cycle II

Difficulty: 🌕Medium🌕 \
Completed: [✅] \
Link: https://leetcode.com/problems/linked-list-cycle-ii

## Notes

Using Floyd's algorithm (turtle and the hare) we can easily find out if the linked list is a cycle. In order to find the actual index of where the cycle begins we need to do some (math) magic using the original headPtr and slowPtr.
