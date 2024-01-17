function uniqueOccurrences(arr: number[]): boolean {
  const values: Record<number, number> = {};

  for (const num of arr) {
    values[num] = (values[num] ?? 0) + 1;
  }

  const occurrences = {};
  for (const [key, occ] of Object.entries(values)) {
    if (occurrences[occ]) {
      return false;
    }
    occurrences[occ] = true;
  }

  return true;
}
