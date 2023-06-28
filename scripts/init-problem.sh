#!/bin/bash

if [[ $# -eq 0 ]]; then
  echo "Please provide a folder name."
  exit 1
fi

folder_name=""
difficulty=""

for arg in "$@"; do
  if [[ -z "$folder_name" ]]; then
    folder_name=$arg
  else
    difficulty=$arg
  fi
done

if [[ -z "$folder_name" ]]; then
  echo "Please provide a folder name."
  exit 1
fi

folder_path="./problems/$folder_name"

# Create the folder if it doesn't exist
mkdir -p "$folder_path"

# Generate index.ts file
index_file="$folder_path/index.ts"
touch "$index_file"

# Generate README.md file
readme_file="$folder_path/README.md"
touch "$readme_file"

# Determine difficulty level
case $difficulty in
  easy|EASY|Easy)
    difficulty="🟢Easy🟢 \\"
    ;;
  medium|MEDIUM|Medium)
    difficulty="🟡Medium🟡 \\"
    ;;
  hard|HARD|Hard)
    difficulty="🔴Hard🔴 \\"
    ;;
  *)
    echo "Invalid difficulty level specified. Defaulting to Easy."
    difficulty="🟢Easy🟢 \\"
    ;;
esac

# Add contents to the README.md file
echo "# $folder_name" >> "$readme_file"
echo >> "$readme_file"
echo "Difficulty: $difficulty" >> "$readme_file"
echo "Completed: [✅] \\" >> "$readme_file"
echo "Link: /$folder_name/ \\" >> "$readme_file"

echo "Files generated successfully."
