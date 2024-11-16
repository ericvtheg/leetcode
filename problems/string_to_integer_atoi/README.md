# 8. String to Integer (atoi)

Difficulty: 🟡Medium🟡 \
Completed: [✅] \
Link: https://leetcode.com/problems/string-to-integer-atoi \

## Notes

Use a state machine when there are clear states of validation / input. Check for integer overflow by dividing max/min int by 10 and checking if the number is greater than 7 or 8 depending on if its max or min.
