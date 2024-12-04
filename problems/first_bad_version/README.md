# 278. First Bad Version

Difficulty: 🟢Easy🟢 \
Completed: [✅] \
Link: https://leetcode.com/problems/first-bad-version/description/

## Notes

My main takeaway from this problem was: \

* avoid integer overflow
* the way you do inclusive/exclusive moves of your pointers is very important

Second takeaways: \ 

* use strict equality of comparison for iteration
* decrement/increment mid depending on direction
* this helps with future cases where we are searching for a target in a sorted list where we don't know forsure that the target exists
