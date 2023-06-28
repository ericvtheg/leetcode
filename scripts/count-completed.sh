#!/bin/bash

# Search and count occurrences of "Completed: [✅]"
num_occurrences=$(find ./problems -name "README.md" -exec grep -Fo "Completed: [✅]" {} \; | wc -l)

# Find line with pattern, replace it with new line
perl -i -pe "s/[0-9]+ problems completed/$num_occurrences problems completed/g" README.md

# Trim leading spaces from the updated line
awk '{ if ($0 ~ /^[[:space:]]*[0-9]+ problems completed[[:space:]]*$/) { sub(/^[[:space:]]+/, ""); } print }' README.md > temp.md && mv temp.md README.md
