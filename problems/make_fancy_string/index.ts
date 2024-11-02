function makeFancyString(s: string): string {
  let occurrencesOfChar = 0;
  let mostRecentChar = undefined;

  let strToReturn = '';

  for (const char of s) {
    if (mostRecentChar === char) {
      occurrencesOfChar += 1;
      if (occurrencesOfChar <= 2) {
        strToReturn += char;
      }
    } else {
      occurrencesOfChar = 1;
      mostRecentChar = char;
      strToReturn += char;
    }
  }

  return strToReturn;
}
