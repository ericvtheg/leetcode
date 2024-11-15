function longestPalindrome(s: string): string {
  let longestPalindromeStr = '';

  for (let i = 0; i < s.length; i += 1) {
    let j = i;
    let k = i;

    // odd
    while (j >= 0 && k < s.length) {
      if (s[j] !== s[k]) {
        break;
      }

      const length = k - j + 1;
      if (length > longestPalindromeStr.length) {
        longestPalindromeStr = s.slice(j, k + 1);
      }

      j -= 1;
      k += 1;
    }

    // even
    if (i + 1 < s.length) {
      j = i;
      k = i + 1;
      while (j >= 0 && k < s.length) {
        if (s[j] !== s[k]) {
          break;
        }

        const length = k - j + 1;
        if (length > longestPalindromeStr.length) {
          longestPalindromeStr = s.slice(j, k + 1);
        }

        j -= 1;
        k += 1;
      }
    }
  }

  return longestPalindromeStr;
}
