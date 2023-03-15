function getHint(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;

  const letters = {};
  for (let i = 0; i < secret.length; i++) {
    const letter = secret[i];
    letters[letter] = (letters[letter] ?? 0) + 1;
  }

  for (let i = 0; i < guess.length; i++) {
    const letter = guess[i];

    if (letter === secret[i]) {
      bulls += 1;
      letters[letter] -= 1;
    } else if (letters[letter]) {
      cows += 1;
      letters[letter] -= 1;
    }

    if (letters[letter] < 0) {
      cows -= 1;
      letters[letter] += 1;
    }
  }

  return `${bulls}A${cows}B`;
}
