#!/bin/bash

if [[ $# -eq 0 ]]; then
  echo "Please provide a folder name."
  exit 1
fi

folder_name=$1
folder_path="./problems/$folder_name"

# Create the folder if it doesn't exist
mkdir -p "$folder_path"

# Generate index.ts file
index_file="$folder_path/index.ts"
touch "$index_file"

# Generate README.md file
readme_file="$folder_path/README.md"
touch "$readme_file"

# Add contents to the README.md file
echo "# $folder_name" >> "$readme_file"
echo >> "$readme_file"
echo "Difficulty: 🟢Easy🟢 \\" >> "$readme_file"
echo "Completed: [✅] \\" >> "$readme_file"
echo "Link: /$folder_name/ \\" >> "$readme_file"

echo "Files generated successfully."
